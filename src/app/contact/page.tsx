'use client';

import Image from 'next/image';
import { siteSettings } from '@/config/siteSettings';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';
import styles from './contact.module.css';

export default function ContactPage() {
  const { contact } = siteSettings;
  const { email, phone, address, googleMapsUrl, socialMedia } = contact;
  
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>Get in touch with our team of professionals</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p className={styles.contactIntro}>
                Have questions about our services or want to schedule a consultation? 
                Our team is ready to assist you. Contact us using any of the methods below.
              </p>
              
              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.iconContainer}>
                    <Image 
                      src="/file.svg" 
                      alt="Address" 
                      width={24} 
                      height={24} 
                      className="icon"
                    />
                  </div>
                  <h3>Visit Us</h3>
                  <p>{address.street}</p>
                  <p>{address.city}, {address.country} {address.postalCode}</p>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconContainer}>
                    <Image 
                      src="/globe.svg" 
                      alt="Email" 
                      width={24} 
                      height={24} 
                      className="icon"
                    />
                  </div>
                  <h3>Email Us</h3>
                  <p>
                    <a href={`mailto:${email}`} className="contact-link">
                      {email}
                    </a>
                  </p>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconContainer}>
                    <Image 
                      src="/window.svg" 
                      alt="Phone" 
                      width={24} 
                      height={24} 
                      className="icon"
                    />
                  </div>
                  <h3>Call Us</h3>
                  <p>
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-link">
                      {phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="social-media">
                <h3>Connect With Us</h3>
                <div className={styles.socialLinks}>
                  <a 
                    href={socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Facebook
                  </a>
                  <a 
                    href={socialMedia.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Twitter
                  </a>
                  <a 
                    href={socialMedia.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="map-title">Our Location</h2>
          <div className={styles.mapContainer}>
            <GoogleMap url={googleMapsUrl} />
          </div>
        </div>
      </section>
    </>
  );
}
