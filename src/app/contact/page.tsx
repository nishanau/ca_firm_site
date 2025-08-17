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
                      src="/ca_firm_site/contact/location.svg" 
                      alt="Address" 
                      width={24} 
                      height={24} 
                      className={styles.icon}
                    />
                  </div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoLabel}>Visit Us</h3>
                    <p className={styles.infoValue}>{address.street}</p>
                    <p className={styles.infoValue}>{address.city}, {address.country} {address.postalCode}</p>
                  </div>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconContainer}>
                    <Image 
                      src="/ca_firm_site/contact/email.svg" 
                      alt="Email" 
                      width={24} 
                      height={24} 
                      className={styles.icon}
                    />
                  </div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoLabel}>Email Us</h3>
                    <p className={styles.infoValue}>
                      <a href={`mailto:${email}`} className={styles.contactLink}>
                        {email}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconContainer}>
                    <Image 
                      src="/ca_firm_site/contact/phone.svg" 
                      alt="Phone" 
                      width={24} 
                      height={24} 
                      className={styles.icon}
                    />
                  </div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoLabel}>Call Us</h3>
                    <p className={styles.infoValue}>
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.contactLink}>
                        {phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.socialSection}>
                <h3 className={styles.socialHeading}>Connect With Us</h3>
                <div className={styles.socialLinks}>
                  <a 
                    href={socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Facebook"
                  >
                    <Image 
                      src="/ca_firm_site/social-media/facebook.svg" 
                      alt="Facebook" 
                      width={20} 
                      height={20} 
                      className={styles.socialIcon}
                    />
                  </a>
                  <a 
                    href={socialMedia.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Twitter"
                  >
                    <Image 
                      src="/ca_firm_site/social-media/twitter.svg" 
                      alt="Twitter" 
                      width={20} 
                      height={20} 
                      className={styles.socialIcon}
                    />
                  </a>
                  <a 
                    href={socialMedia.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="LinkedIn"
                  >
                    <Image 
                      src="/ca_firm_site/social-media/linkedin.svg" 
                      alt="LinkedIn" 
                      width={20} 
                      height={20} 
                      className={styles.socialIcon}
                    />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Location</h2>
          <p className={styles.sectionDescription}>
            We are conveniently located in the heart of the financial district. 
            Feel free to visit us during business hours.
          </p>
          <div className={styles.mapContainer}>
            <GoogleMap url={googleMapsUrl} />
          </div>
        </div>
      </section>
    </>
  );
}
