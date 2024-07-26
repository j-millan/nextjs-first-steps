'use client';

import Link from "next/link";
import styles from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: ActiveLinkProps) => {
  const pathName = usePathname();
  
  return (
    <Link
      className={pathName === path ? styles["active-link"] : styles.link}
      href={path}
    >
      {label}
    </Link>
  );
};