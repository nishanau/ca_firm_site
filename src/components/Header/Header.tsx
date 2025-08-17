'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import { getContactInfo } from '@/config/settingsUtils';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // We only need the phone from contact info for the header
  const { phone } = getContactInfo();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log (`pathname`, pathname);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Logo />
          
          <button 
            className={styles.mobileMenuButton} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
          </button>
          
          <nav className={`${styles.mainNav} ${isMenuOpen ? styles.mainNavOpen : ''}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link 
                  href="/" 
                  className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link 
                  href="/about" 
                  className={`${styles.navLink} ${pathname === '/about/' ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link 
                  href="/services" 
                  className={`${styles.navLink} ${pathname === '/services/' ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Services
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link 
                  href="/contact" 
                  className={`${styles.navLink} ${pathname === '/contact/' ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className={styles.contactInfo}>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className={styles.phoneLink}>
              {phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
