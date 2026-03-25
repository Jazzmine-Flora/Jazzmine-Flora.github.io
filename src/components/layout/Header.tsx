import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import "./Header.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Work" },
  { path: "/reviews", label: "Reviews" },
  { path: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const scrollActivePath = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero--3d");
    if (!hero) { setOverDark(false); return; }

    const check = () => {
      const bottom = hero.getBoundingClientRect().bottom;
      setOverDark(bottom > 48);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [location.pathname]);

  return (
    <header className={`header${overDark ? " header--dark" : ""}`}>
      <div className="header__inner container">
        <Link
          to="/"
          className="header__brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="header__brand-name">Taliba Sadiq</span>
          <span className="header__brand-tag">Software Architect &amp; AI Engineer</span>
        </Link>
        <button
          className={`header__burger${menuOpen ? " header__burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`header__nav${menuOpen ? " header__nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="header__list">
            {navItems.map(({ path, label }) => {
              const isActive = scrollActivePath === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`header__link ${isActive ? "header__link--active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      setMenuOpen(false);
                      if (path === "/" && location.pathname === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
