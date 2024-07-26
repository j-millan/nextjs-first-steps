import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '..';
import styles from './Navbar.module.css';

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar = async () => {
  // await beforeNav();

  return (
    <nav className={styles.navbar}>
      <Link href={"/"} className={styles.homeItem}>
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className={styles.spacer}></div>

      {
        navItems.map((item) => (
          <ActiveLink key={item.path} {...item}/>
        ))
      }
    </nav>
  );
};
