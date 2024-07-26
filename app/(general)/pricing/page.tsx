import { Metadata } from "next";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page.",
};

const PricingPage = () => {
  return (
    <>
      <span className={styles.title}>Pricing page.</span>
    </>
  );
};

export default PricingPage;
