"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (windowHeight === 0) return setScrollProgress(0);

      const scroll = `${totalScroll / windowHeight}`;
      const scrollPercent = Math.min(Math.max(Number(scroll), 0), 1);

      setScrollProgress(Math.round(scrollPercent * 100));
    };

    window.addEventListener("scroll", handleScroll);
    // Call handler immediately to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40 font-mono text-[8px] md:text-xs mix-blend-difference text-gray-500 flex flex-col items-end leading-none gap-0.5">
      <span className="tabular-nums">{scrollProgress}%</span>
    </div>
  );
}
