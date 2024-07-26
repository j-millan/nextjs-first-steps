import { Metadata } from "next";
import styles from "../../page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page.",
  keywords: [
    "contact",
    "contact us",
    "email",
    "social media",
    "customer service",
    "attention",
    "support",
    "message",
    "phone number",
    "text",
    "address",
    "inquiry",
    "feedback",
  ],
};

const ContactPage = () => {
  return (
    <>
      <span className={styles.title}>Contact page.</span>
    </>
  );
};

export default ContactPage;
