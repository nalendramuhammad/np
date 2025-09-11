"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Hitung mundur satu bulan dari sekarang
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    const target = new Date(now);
    target.setMonth(target.getMonth() + 1);

    function updateCountdown() {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown({ days, hours, minutes, seconds });
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles["responsive-title"]}>
          <span
            style={{
              fontFamily: "Satoshi, var(--font-satoshi)",
              fontWeight: "bold",
            }}
          >
            Coming
          </span>{" "}
          <span
            style={{
              fontFamily: "TestTiemposHeadline, var(--font-tiempos)",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Soon
          </span>
        </h1>
        <div
          style={{
            marginTop: 4,
            fontSize: "0.8rem",
            fontWeight: 500,
            textAlign: "center",
            letterSpacing: "0.01em",
          }}
        >
          {countdown.days} hari {countdown.hours} jam {countdown.minutes} menit{" "}
          {countdown.seconds} detik
        </div>
      </main>
    </div>
  );
}
