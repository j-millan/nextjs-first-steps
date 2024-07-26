import Link from "next/link";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className="main-container">
      <span className={styles.title}>Hello World.</span>
      <Link href="/about">About</Link>
    </main>
  );
}

export default Home;