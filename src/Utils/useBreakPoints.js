// Responsiveness

import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1200,
};

export default function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width <= breakpoints.mobile) return "mobile";
  if (width > breakpoints.mobile && width <= breakpoints.tablet) return "tablet";
  return "desktop";
}