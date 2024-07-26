import { Metadata } from "next";
import styles from '../../page.module.css';

export const metadata: Metadata = {
  title: "About",
  description: "About page.",
};

const AboutPage = () => {
  return (
    <span className={styles.title}>About page.</span>
  );
};

export default AboutPage;