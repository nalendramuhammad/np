import styles from "./page.module.css";

export default function Home() {
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
      </main>
    </div>
  );
}
