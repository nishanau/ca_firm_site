'use client';

import Link from 'next/link';
import { getFirmInfo, getContactInfo } from '@/config/settingsUtils';

export default function Footer() {
  const { firmName } = getFirmInfo();
  const { email, phone, address, socialMedia } = getContactInfo();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{firmName}</h3>
            <p>Providing professional accounting and financial services with integrity and excellence.</p>
            <div className="social-links">
              {socialMedia.facebook && (
                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="social-icon facebook">FB</i>
                </a>
              )}
              {socialMedia.twitter && (
                <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="social-icon twitter">TW</i>
                </a>
              )}
              {socialMedia.linkedin && (
                <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="social-icon linkedin">LI</i>
                </a>
              )}
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <address>
              <p>{address.street}</p>
              <p>{address.city}, {address.country} {address.postalCode}</p>
              <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
              <p>Phone: <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a></p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {firmName}. All rights reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--panel);
          color: var(--text);
          padding: 3rem 0 1.5rem;
          border-top: 1px solid var(--border);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--brand);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: var(--text);
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-links a:hover {
          color: var(--brand);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: var(--chip);
          border-radius: 50%;
          color: var(--text);
          text-decoration: none;
          transition: background-color 0.2s;
        }
        
        .social-icon:hover {
          background: var(--brand);
        }
        
        address {
          font-style: normal;
          line-height: 1.6;
        }
        
        address a {
          color: var(--brand);
          text-decoration: none;
        }
        
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
          color: var(--muted);
        }
      `}</style>
    </footer>
  );
}
