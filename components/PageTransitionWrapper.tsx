"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger entry animation
    setIsVisible(true);
  }, []);

  const handleExit = (href: string) => {
    setIsExiting(true);
    setTimeout(() => {
      router.push(href);
    }, 1000);
  };

  // Expose handleExit to children via context if needed, 
  // but for now we might just need it for the back button.
  // We can clone children or just use a context.
  // Since the header back button is inside the children, we need a way to pass this down.
  // A simple way is to provide a context.

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ease-in-out ${
        isVisible && !isExiting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <PageTransitionContext.Provider value={{ handleExit }}>
        {children}
      </PageTransitionContext.Provider>
    </div>
  );
}

import { createContext, useContext } from "react";

interface PageTransitionContextType {
  handleExit: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(
  undefined
);

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (context === undefined) {
    throw new Error("usePageTransition must be used within a PageTransitionWrapper");
  }
  return context;
}
