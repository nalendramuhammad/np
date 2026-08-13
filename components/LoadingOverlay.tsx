"use client";

import { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingContext";
import {
  LOADING_DONE_MESSAGE,
  pickRandomLoadingMessage,
} from "../data/loadingMessages";
import styles from "../styles/LoadingOverlay.module.scss";

export default function LoadingOverlay() {
  const { setIsLoading } = useLoading();
  const [fade, setFade] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(pickRandomLoadingMessage());

    const midMessageTimer = setTimeout(() => {
      setMessage(pickRandomLoadingMessage());
    }, 700);

    const doneMessageTimer = setTimeout(() => {
      setMessage(LOADING_DONE_MESSAGE);
    }, 1300);

    const fadeTimer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setIsLoading(false), 800);
    }, 1700);

    return () => {
      clearTimeout(midMessageTimer);
      clearTimeout(doneMessageTimer);
      clearTimeout(fadeTimer);
    };
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
