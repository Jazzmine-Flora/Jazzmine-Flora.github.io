import { useEffect, useState } from "react";

/**
 * Section order in the document → hash route used by the header nav.
 * Philosophy & execution sit under “Home”; skills has no nav item — keep “Reviews” until Contact.
 */
export const SECTION_NAV: readonly { id: string; path: string }[] = [
  { id: "home", path: "/" },
  { id: "services", path: "/" },
  { id: "philosophy", path: "/" },
  { id: "work", path: "/projects" },
  { id: "reviews", path: "/reviews" },
  { id: "skills", path: "/reviews" },
  { id: "contact", path: "/contact" },
] as const;

const HEADER_PROBE_OFFSET = 96;

function computeActivePath(): string {
  const line = window.scrollY + HEADER_PROBE_OFFSET;
  let path = "/";
  for (const { id, path: sectionPath } of SECTION_NAV) {
    const el = document.getElementById(id);
    if (!el) continue;
    const topDoc = window.scrollY + el.getBoundingClientRect().top;
    if (topDoc <= line) {
      path = sectionPath;
    }
  }
  return path;
}

/**
 * Active nav path derived from scroll position (which section’s top has passed the probe line).
 */
export function useScrollSpy(): string {
  const [activePath, setActivePath] = useState(computeActivePath);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setActivePath(computeActivePath());
      });
    };

    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);

    const ro = new ResizeObserver(tick);
    ro.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
      ro.disconnect();
    };
  }, []);

  return activePath;
}
