import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A React component that scrolls the page to the top whenever the path changes.
 * @returns {null}
 */
const ScrollToTop = () => {
  // Get the current location using the useLocation hook from react-router-dom
  const { pathname } = useLocation();

  // Scroll to the top of the page whenever the pathname changes using the useEffect hook
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything, it just handles scrolling
  return null;
};

export default ScrollToTop;
