"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CURSOR_MOVE_DURATION = 0.8;
const CURSOR_MOVE_EASE = "power3.out";

export default function CustomCursor({
  isVisible = true,
}: {
  isVisible?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const moveXRef = useRef<gsap.QuickToFunc | null>(null);
  const moveYRef = useRef<gsap.QuickToFunc | null>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  const labelOnly = !!(cursorLabel && !isPointer);

  useEffect(() => {
    if (!wrapperRef.current) return;

    moveXRef.current = gsap.quickTo(wrapperRef.current, "x", {
      duration: CURSOR_MOVE_DURATION,
      ease: CURSOR_MOVE_EASE,
    });
    moveYRef.current = gsap.quickTo(wrapperRef.current, "y", {
      duration: CURSOR_MOVE_DURATION,
      ease: CURSOR_MOVE_EASE,
    });

    const moveCursor = (e: MouseEvent) => {
      moveXRef.current?.(e.clientX);
      moveYRef.current?.(e.clientY);
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const labelEl = target.closest("[data-cursor-label]");

      if (labelEl) {
        setCursorLabel(labelEl.getAttribute("data-cursor-label"));
        setIsPointer(
          labelEl.hasAttribute("data-clickable") ||
            labelEl.tagName.toLowerCase() === "a" ||
            labelEl.tagName.toLowerCase() === "button",
        );
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
      moveXRef.current = null;
      moveYRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    if (!isVisible) {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      return;
    }

    gsap.to(cursorRef.current, {
      scale: labelOnly ? 1 : isPointer ? 1.2 : 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isVisible, isPointer, labelOnly]);

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 hidden lg:flex flex-col items-center pointer-events-none z-[60] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <div
        ref={cursorRef}
        className={`bg-white flex items-center justify-center opacity-0 scale-0 transition-[width,height,padding] duration-300 ${
          labelOnly
            ? "h-auto w-auto px-4 py-2 rounded-full"
            : isPointer
              ? "w-10 h-10 rounded-full"
              : "w-8 h-8 rounded-full"
        }`}
      >
        {labelOnly ? (
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

      {!labelOnly && (
        <span
          className={`mt-2 max-w-[220px] font-satoshi font-medium text-[10px] text-white text-center leading-snug whitespace-nowrap transition-all duration-300 ${
            cursorLabel
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none"
          }`}
        >
          {cursorLabel}
        </span>
      )}
    </div>
  );
}
