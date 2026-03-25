import React, { useCallback, useState } from "react";
import { WEB3FORMS_ACCESS_KEY } from "../config/contact";
import "../styles/main.css";
import "../pages/ContactPage.css";

type FormStatus = "idle" | "sending" | "success" | "error";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showExtra, setShowExtra] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!WEB3FORMS_ACCESS_KEY.trim()) {
      setStatus("error");
      setErrorMessage(
        "Email delivery is not configured yet. Add your Web3Forms access key in src/config/contact.ts (see https://web3forms.com)."
      );
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
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

    const messageBody = [
      company && `Company / org: ${company}`,
      phone && `Phone: ${phone}`,
      projectType && `Project type: ${projectType}`,
      timeline && `Timeline: ${timeline}`,
      budget && `Budget / engagement: ${budget}`,
      "",
      "Project details:",
      details,
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("sending");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          ...(phone ? { phone } : {}),
          subject: `Portfolio inquiry: ${projectType || "Project"} (${name})`,
          message: messageBody,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && (data as { success?: boolean }).success !== false) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          (data as { message?: string }).message ||
            "Something went wrong. Please try again in a moment."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }, []);

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
              <button
                type="button"
                className="btn btn--primary contact-form-panel__reset"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row contact-form__row--2">
                <label className="contact-form__field">
                  <span className="contact-form__label">Name *</span>
                  <input
                    className="contact-form__input"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                  />
                </label>
                <label className="contact-form__field">
                  <span className="contact-form__label">Email *</span>
                  <input
                    className="contact-form__input"
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
                <textarea
                  className="contact-form__textarea"
                  name="details"
                  required
                  rows={5}
                  placeholder="Stack, goals, constraints, and what done looks like."
                />
              </label>

              {!showExtra && (
                <button
                  type="button"
                  className="contact-form__toggle"
                  onClick={() => setShowExtra(true)}
                >
                  + Add more details (company, timeline, budget&hellip;)
                </button>
              )}

              {showExtra && (
                <>
                  <div className="contact-form__row contact-form__row--2">
                    <label className="contact-form__field">
                      <span className="contact-form__label">Company / organization</span>
                      <input
                        className="contact-form__input"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Optional"
                      />
                    </label>
                    <label className="contact-form__field">
                      <span className="contact-form__label">Phone (optional)</span>
                      <input
                        className="contact-form__input"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="+1 ..."
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
                        <option value="">Optional</option>
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

                  <label className="contact-form__field">
                    <span className="contact-form__label">Budget / engagement (optional)</span>
                    <input
                      className="contact-form__input"
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

              <button type="submit" className="btn btn--primary contact-form__submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
