"use client";

import { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingContext";
import { getShuffledLoadingMessages } from "../data/loadingMessages";
import styles from "../styles/LoadingOverlay.module.scss";

const WORD_INTERVAL = 120;
const FADE_DURATION = 400;

export default function LoadingOverlay() {
  const { setIsLoading } = useLoading();
  const [fade, setFade] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const messages = getShuffledLoadingMessages();

    setMessage(messages[0]);

    for (let i = 1; i < messages.length; i++) {
      timers.push(
        setTimeout(() => setMessage(messages[i]), i * WORD_INTERVAL),
      );
    }

    timers.push(
      setTimeout(() => {
        setFade(true);
        timers.push(setTimeout(() => setIsLoading(false), FADE_DURATION));
      }, messages.length * WORD_INTERVAL),
    );

    return () => timers.forEach(clearTimeout);
  }, [setIsLoading]);

  return (
    <div
      className={
        fade
          ? `${styles.loadingOverlay} ${styles.fadeOut}`
          : styles.loadingOverlay
      }
    >
      <span className={styles.loadingMessage}>{message}</span>
    </div>
  );
}
