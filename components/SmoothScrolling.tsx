"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { useLoading } from "../contexts/LoadingContext";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useLoading();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 3.0, // Increased from 1.2 to 2.0 for slower scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  // Stop scrolling when loading
  useEffect(() => {
    if (!lenis) return;

    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isLoading, lenis]);

  return <>{children}</>;
}
