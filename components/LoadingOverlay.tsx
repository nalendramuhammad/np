"use client";

import { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingContext";
import styles from "../styles/LoadingOverlay.module.scss";

export default function LoadingOverlay() {
  const { setIsLoading } = useLoading();
  const [fade, setFade] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    let progress = 0;

    // Phase 1: Percentage counter
    const progressInterval = setInterval(() => {
      // Random increment between 1 and 4 to make it look organic
      const increment = Math.floor(Math.random() * 4) + 1;
      progress = Math.min(progress + increment, 100);

      setContent(`${progress}%`);

      if (progress >= 100) {
        clearInterval(progressInterval);

        // Phase 2: Fade out
        setTimeout(() => {
          setFade(true);
          // Wait for fade animation (0.8s) before unmounting/hiding
          setTimeout(() => setIsLoading(false), 800);
        }, 200);
      }
    }, 20); // Update every 20ms

    return () => clearInterval(progressInterval);
  }, [setIsLoading]);

  return (
    <div
      className={
        fade
          ? `${styles.loadingOverlay} ${styles.fadeOut}`
          : styles.loadingOverlay
      }
    >
      <span className={styles.loadingText}>{content}</span>
    </div>
  );
}
