import { Navbar } from "@/components";
import styles from "../page.module.css";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar></Navbar>
      <main className="main-container">
        <span>Next.js First Steps</span>
        {children}
      </main>;
    </>
  );
}
