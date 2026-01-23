"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when near bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 text-xs mix-blend-difference text-white flex gap-1 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="font-satoshi font-bold">
        this website is currently under development, for more
        project/information feel free to
      </span>
      <a
        href="mailto:hi@nalendra.work"
        className="font-tiempos italic underline decoration-1 underline-offset-2 hover:opacity-70 transition-opacity cursor-none"
        data-clickable="true"
      >
        reach out
      </a>
    </div>
  );
}
