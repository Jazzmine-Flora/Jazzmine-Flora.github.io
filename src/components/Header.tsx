import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__brand">
          Taliba Sadiq
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
