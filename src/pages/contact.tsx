import React from "react";
import "../styles/main.css";

const ContactPage: React.FC = () => (
  <div className="contact-page page-content">
    <section className="section">
      <div className="container contact__inner">
        <h1 className="contact__title">Get in Touch</h1>
        <p className="contact__lead">
          I'd love to hear from you — whether it's about a project, collaboration, or just saying hi.
        </p>
        <div className="contact__cards">
          <a
            href="mailto:taliba.latif@gmail.com"
            className="contact__card"
            aria-label="Email Taliba"
          >
            <span className="contact__card-label">Email</span>
            <span className="contact__card-value">taliba.latif@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/taliba-sadiq"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
            aria-label="LinkedIn profile"
          >
            <span className="contact__card-label">LinkedIn</span>
            <span className="contact__card-value">Connect with me</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
