import React from "react";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <p className="footer__copy">
        Copyright &copy; {new Date().getFullYear()} Taliba Sadiq. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
