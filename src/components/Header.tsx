'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { getContactInfo } from '@/config/settingsUtils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // We only need the phone from contact info for the header
  const { phone } = getContactInfo();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Logo />
          
          <button 
            className="mobile-menu-button" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Our Services</Link></li>
              <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>
          
          <div className="contact-info">
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="phone-link">
              {phone}
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          background: var(--panel);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        
        .main-nav {
          display: flex;
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }
        
        .nav-list li a {
          color: var(--text);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        
        .nav-list li a:hover {
          color: var(--brand);
        }
        
        .contact-info {
          margin-left: 2rem;
        }
        
        .phone-link {
          color: var(--brand);
          text-decoration: none;
          font-weight: 600;
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text);
          position: relative;
          transition: all 0.3s;
        }
        
        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: var(--text);
          transition: all 0.3s;
        }
        
        .hamburger::before {
          top: -8px;
        }
        
        .hamburger::after {
          bottom: -8px;
        }
        
        .hamburger.open {
          background: transparent;
        }
        
        .hamburger.open::before {
          top: 0;
          transform: rotate(45deg);
        }
        
        .hamburger.open::after {
          bottom: 0;
          transform: rotate(-45deg);
        }
        
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
          
          .main-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--panel);
            padding: 1rem;
            border-top: 1px solid var(--border);
          }
          
          .main-nav.open {
            display: block;
          }
          
          .nav-list {
            flex-direction: column;
            gap: 1rem;
          }
          
          .contact-info {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
