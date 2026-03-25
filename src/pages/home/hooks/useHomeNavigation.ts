import { useCallback, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRevealOnScroll } from "../../../hooks/useRevealOnScroll";
import { PATH_TO_SECTION } from "../content/pathToSection";
import type { ScrollToHandler } from "../types";

export function useHomeNavigation(): { scrollTo: ScrollToHandler } {
  const location = useLocation();
  const navigate = useNavigate();

  useRevealOnScroll();

  const scrollTo = useCallback<ScrollToHandler>((id, path) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  }, [navigate]);

  useLayoutEffect(() => {
    const id = PATH_TO_SECTION[location.pathname];
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return { scrollTo };
}
