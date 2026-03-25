import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/reviews", label: "Reviews" },
  { path: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__brand">
          <span className="header__brand-name">Taliba Sadiq</span>
          <span className="header__brand-tag">Software architect · Full stack</span>
        </Link>
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__list">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`header__link ${location.pathname === path ? "header__link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
