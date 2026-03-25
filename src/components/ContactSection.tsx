import React, { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  isEmailJsConfigured,
} from "@/config/contact";
import "@/components/ContactSection.css";

type FormStatus = "idle" | "sending" | "success" | "error";

/** Enough for E.164 (+ country code + spaces in international mode). */
const PHONE_INPUT_MAX_LENGTH = 25;

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showExtra, setShowExtra] = useState(false);
  const [phone, setPhone] = useState<string | undefined>();
  /** Bump to reset PhoneInput country + digits to `defaultCountry` (US). See library `reset` prop. */
  const [phoneFieldReset, setPhoneFieldReset] = useState(0);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!isEmailJsConfigured()) {
      setStatus("error");
      setErrorMessage(
        "Email delivery is not configured. Set VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID in .env.local (local) or GitHub Actions secrets (production). See README."
      );
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const phoneValue = (phone ?? "").trim();
    const projectType = String(fd.get("project_type") || "").trim();
    const timeline = String(fd.get("timeline") || "").trim();
    const budget = String(fd.get("budget") || "").trim();
    const details = String(fd.get("details") || "").trim();
    const honeypot = String(fd.get("botcheck") || "").trim();
    if (honeypot) return;

    if (!name || !email || !details) {
      setErrorMessage("Please fill in your name, email, and project details.");
      return;
    }

    setStatus("sending");

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          phone: phoneValue,
          company,
          project_type: projectType,
          timeline,
          budget,
          message: details,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      if (result.status === 200) {
        setStatus("success");
        setPhone(undefined);
        setPhoneFieldReset((n) => n + 1);
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.text || "Something went wrong. Please try again in a moment.");
      }
    } catch (err: unknown) {
      setStatus("error");
      const e = err as { text?: string; message?: string };
      setErrorMessage(
        e.text || e.message || "Network error. Check your connection and try again."
      );
    }
  }, [phone]);

  return (
    <section id="contact" className="section section--contact contact-section contact-shell reveal" aria-labelledby="contact-heading">
      <div className="container contact-shell__inner">
        <header className="contact-shell__intro">
          <p className="contact-shell__eyebrow">Contact</p>
          <h2 id="contact-heading" className="contact-shell__title">
            Let&apos;s build something together
          </h2>
          <p className="contact-shell__lead">
            Have a product that needs architecture, AI integration, or full-stack development? Tell me what
            you&apos;re working on. I&apos;ll reply within one business day.
          </p>
          <ul className="contact-shell__trust">
            <li>Specific questions get faster answers</li>
            <li>Mention in the details if you need an NDA first</li>
            <li>Project inquiries only (no recruiter blasts)</li>
          </ul>
        </header>

        <div className="contact-form-panel">
          {status === "success" ? (
            <div className="contact-form-panel__success" role="status">
              <p className="contact-form-panel__success-icon" aria-hidden="true">&#10003;</p>
              <h3 className="contact-form-panel__success-title">Message sent</h3>
              <p className="contact-form-panel__success-text">
                Your note is in my inbox. I&apos;ll reply in the same thread.
              </p>
              <Button
                type="button"
                variant="ghost"
                className={cn("btn btn--primary contact-form-panel__reset")}
                onClick={() => setStatus("idle")}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row contact-form__row--2">
                <label className="contact-form__field">
                  <span className="contact-form__label">Name *</span>
                  <Input
                    className={cn("contact-form__input")}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                  />
                </label>
                <label className="contact-form__field">
                  <span className="contact-form__label">Email *</span>
                  <Input
                    className={cn("contact-form__input")}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="contact-form__field">
                <span className="contact-form__label">What are you working on? *</span>
                <Textarea
                  className={cn("contact-form__textarea")}
                  name="details"
                  required
                  rows={5}
                  placeholder="Stack, goals, constraints, and what done looks like."
                />
              </label>

              {!showExtra && (
                <Button
                  type="button"
                  variant="ghost"
                  className={cn("contact-form__toggle")}
                  onClick={() => setShowExtra(true)}
                >
                  + Add more details (company, timeline, budget&hellip;)
                </Button>
              )}

              {showExtra && (
                <>
                  <div className="contact-form__row contact-form__row--2">
                    <label className="contact-form__field" title="Company or organization">
                      <span className="contact-form__label">Company</span>
                      <Input
                        className={cn("contact-form__input")}
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Company name"
                      />
                    </label>
                    <label className="contact-form__field" htmlFor="contact-phone">
                      <span className="contact-form__label">Phone</span>
                      <PhoneInput
                        id="contact-phone"
                        international
                        countryCallingCodeEditable={false}
                        addInternationalOption={false}
                        defaultCountry="US"
                        reset={phoneFieldReset}
                        value={phone}
                        onChange={setPhone}
                        className={cn("contact-form__phone")}
                        numberInputProps={{
                          className: "contact-form__phone-input",
                          autoComplete: "tel",
                          inputMode: "tel",
                          maxLength: PHONE_INPUT_MAX_LENGTH,
                          "aria-label": "Phone number",
                        }}
                      />
                    </label>
                  </div>

                  <div className="contact-form__row contact-form__row--2">
                    <label className="contact-form__field">
                      <span className="contact-form__label">Project type</span>
                      <select className="contact-form__input contact-form__select" name="project_type" defaultValue="">
                        <option value="">Select...</option>
                        <option value="New build: web app">New build: web app</option>
                        <option value="New build: marketing site">New build: marketing site</option>
                        <option value="New build: mobile app">New build: mobile app</option>
                        <option value="New build: mobile & web">New build: mobile & web</option>
                        <option value="Refactor / stabilize codebase">Refactor / stabilize codebase</option>
                        <option value="Performance / reliability">Performance / reliability</option>
                        <option value="Architecture / technical review">Architecture / technical review</option>
                        <option value="AI / product integration">AI / product integration</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>
                    <label className="contact-form__field">
                      <span className="contact-form__label">Ideal timeline</span>
                      <select className="contact-form__input contact-form__select" name="timeline" defaultValue="">
                        <option value="">Select...</option>
                        <option value="Planning phase / TBD">Planning phase / TBD</option>
                        <option value="Rush (under 2 weeks)">Rush (under 2 weeks)</option>
                        <option value="2-4 weeks">2-4 weeks</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months or ongoing">6+ months or ongoing</option>
                        <option value="Flexible / open schedule">Flexible / open schedule</option>
                      </select>
                    </label>
                  </div>

                  <label className="contact-form__field" title="Budget or engagement type">
                    <span className="contact-form__label">Budget</span>
                    <Input
                      className={cn("contact-form__input")}
                      name="budget"
                      type="text"
                      placeholder="e.g. fixed scope, monthly retainer, TBD"
                    />
                  </label>
                </>
              )}

              <label className="contact-form__hp" aria-hidden="true">
                <span>Leave empty</span>
                <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
              </label>

              {status === "error" && errorMessage && (
                <p className="contact-form__error" role="alert">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                variant="ghost"
                className={cn("btn btn--primary contact-form__submit")}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
