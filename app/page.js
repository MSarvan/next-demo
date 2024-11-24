import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.homePageContainer}>
          <h1>Home Page</h1>
        </div>
      </main>
    </div>
  );
}
