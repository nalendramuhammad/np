"use client";

import { useEffect } from "react";

const COMING_SOON_MESSAGE = "coming soon";

export { COMING_SOON_MESSAGE };

export default function ComingSoonToast({
  visible,
  onHide,
}: {
  visible: boolean;
  onHide: () => void;
}) {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(onHide, 2500);
    return () => clearTimeout(timer);
  }, [visible, onHide]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden transition-all duration-300 font-satoshi font-medium text-[10px] md:text-xs px-4 py-2.5 bg-black text-white rounded-full whitespace-nowrap ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {COMING_SOON_MESSAGE}
    </div>
  );
}
