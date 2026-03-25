import React, { useCallback, useState } from "react";
import { WEB3FORMS_ACCESS_KEY } from "../config/contact";
import "./ContactPage.css";

type FormStatus = "idle" | "sending" | "success" | "error";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    <div className="contact-page page-content">
      <section className="contact-shell section">
        <div className="container contact-shell__inner">
          <header className="contact-shell__intro">
            <p className="contact-shell__eyebrow">Contact</p>
            <h1 className="contact-shell__title">Write me a note</h1>
            <p className="contact-shell__lead">
              A few fields so I know who you are and what you want to ship. I read every message; I usually reply within
              a day.
            </p>
            <ul className="contact-shell__trust">
              <li>Specific questions get faster answers</li>
              <li>Say in the details if you need an NDA first</li>
              <li>Project inquiries only (no recruiter blasts)</li>
            </ul>
          </header>

          <div className="contact-form-panel">
            {status === "success" ? (
              <div className="contact-form-panel__success" role="status">
                <h2 className="contact-form-panel__success-title">Got it</h2>
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
                      placeholder="+1 …"
                    />
                  </label>
                </div>

                <div className="contact-form__row contact-form__row--2">
                  <label className="contact-form__field">
                    <span className="contact-form__label">Project type *</span>
                    <select className="contact-form__input contact-form__select" name="project_type" required defaultValue="">
                      <option value="" disabled>
                        Select…
                      </option>
                      <option value="New build: web app">New build: web app</option>
                      <option value="New build: marketing site">New build: marketing site</option>
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
                      <option value="ASAP / under 2 weeks">ASAP / under 2 weeks</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="2+ months / flexible">2+ months / flexible</option>
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

                <label className="contact-form__field">
                  <span className="contact-form__label">Project details *</span>
                  <textarea
                    className="contact-form__textarea"
                    name="details"
                    required
                    rows={6}
                    placeholder="Stack, goals, constraints, links, and what done looks like."
                  />
                </label>

                {/* Honeypot */}
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
                  {status === "sending" ? "Sending…" : "Send inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
