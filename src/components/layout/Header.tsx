import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import avatar from "@/assets/avatar.png";
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
  const [avatarVisible, setAvatarVisible] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero--3d");
    if (!hero) { setOverDark(false); setAvatarVisible(false); return; }

    const check = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setOverDark(heroBottom > 48);

      const heroAvatar = document.getElementById("hero-avatar");
      if (heroAvatar) {
        const avatarRect = heroAvatar.getBoundingClientRect();
        const headerHeight = document.querySelector(".header")?.getBoundingClientRect().height ?? 72;
        setAvatarVisible(avatarRect.bottom <= headerHeight + 10);
      }
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
          <AnimatePresence>
            {avatarVisible && (
              <motion.img
                src={avatar}
                alt=""
                className="header__avatar"
                aria-hidden="true"
                width={36}
                height={36}
                draggable={false}
                initial={{ opacity: 0, scale: 0.3, width: 0, marginRight: 0 }}
                animate={{ opacity: 1, scale: 1, width: 36, marginRight: 12 }}
                exit={{ opacity: 0, scale: 0.3, width: 0, marginRight: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}
              />
            )}
          </AnimatePresence>
          <div className="header__brand-text">
            <span className="header__brand-name">Taliba Sadiq</span>
            <span className="header__brand-tag">Software Architect &amp; AI Engineer</span>
          </div>
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
