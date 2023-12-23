import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Tech Blog</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
