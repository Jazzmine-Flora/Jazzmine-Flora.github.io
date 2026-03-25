import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top when navigating to home. Section routes scroll in HomePage.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
