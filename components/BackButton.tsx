"use client";

import { usePageTransition } from "./PageTransitionWrapper";

export default function BackButton() {
  const { handleExit } = usePageTransition();

  return (
    <div
      onClick={() => handleExit("/")}
      className="hover:text-gray-600 transition-colors lg:cursor-none"
      aria-label="Back to home"
      data-clickable="true"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </div>
  );
}
