import React from "react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <p className="footer__copy">
        © {new Date().getFullYear()} Taliba Sadiq. All rights reserved.
      </p>
      <div className="footer__social" aria-label="Social links">
        <a
          href="https://www.linkedin.com/in/taliba-sadiq"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="footer__icon" title="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Jazzmine-Flora"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="GitHub"
        >
          <GitHubIcon className="footer__icon" title="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
