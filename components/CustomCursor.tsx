"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor({
  isVisible = true,
}: {
  isVisible?: boolean;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const labelEl = target.closest("[data-cursor-label]");

      if (labelEl) {
        setCursorLabel(labelEl.getAttribute("data-cursor-label"));
        setIsPointer(false);
        return;
      }

      setCursorLabel(null);

      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[data-clickable="true"]') ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkPointer);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: position.x,
        y: position.y,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  }, [position]);

  useEffect(() => {
    if (cursorRef.current) {
      if (isVisible) {
        gsap.to(cursorRef.current, {
          scale: cursorLabel ? 1 : isPointer ? 1.2 : 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isVisible, isPointer, cursorLabel]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 ${
        cursorLabel
          ? "h-auto w-auto px-4 py-2 rounded-full"
          : isPointer
            ? "w-10 h-10 rounded-full"
            : "w-8 h-8 rounded-full"
      } bg-white mix-blend-difference hidden lg:flex items-center justify-center pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 transition-[width,height,padding] duration-300`}
    >
      {cursorLabel ? (
        <span className="font-satoshi font-medium text-[10px] text-black whitespace-nowrap leading-none">
          {cursorLabel}
        </span>
      ) : isPointer ? (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      ) : (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="black"
          stroke="none"
        >
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        </svg>
      )}
    </div>
  );
}
