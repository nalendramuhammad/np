"use client";

import { useEffect, useState } from "react";

export default function ScrollHint({ hidden = false }: { hidden?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const atTop = window.scrollY < 80;
      const canScroll =
        document.documentElement.scrollHeight > window.innerHeight + 80;

      setIsVisible(atTop && canScroll);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-8 z-40 transition-all duration-500 font-satoshi font-medium text-[8px] md:text-xs mix-blend-difference text-white lg:cursor-none pointer-events-none flex items-end gap-2 ${
        isVisible && !hidden
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      aria-hidden={!isVisible || hidden}
    >
      <span className="inline-block animate-bounce leading-none text-sm md:text-base">
        ↓
      </span>
    </div>
  );
}
