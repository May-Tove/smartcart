import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A React component that scrolls the page to the top whenever the path changes.
 * @returns {null}
 */
const ScrollToTop = () => {
  // Get the current location using the useLocation hook from react-router-dom
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
