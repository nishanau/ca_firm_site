'use client';

import Link from 'next/link';
import { siteSettings } from '@/config/siteSettings';
import TeamMembers from '@/components/TeamMembers';
import styles from './about.module.css';

export default function About() {
  const { firmName, aboutUs, mission, vision, history } = siteSettings;
  
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroSubtitle}>Learn more about {firmName} and our team</p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <p className={styles.text}>{aboutUs}</p>
            
            <div className={styles.missionVision}>
              <div className={styles.missionCard}>
                <h3>Our Mission</h3>
                <p className={styles.text}>{mission}</p>
              </div>
              <div className={styles.visionCard}>
                <h3>Our Vision</h3>
                <p className={styles.text}>{vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className={`section ${styles.historySection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.historyContent}>
            <p className={styles.text}>{history}</p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The professionals behind our success</p>
          
          <TeamMembers detailed={true} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Have Questions About Our Services?</h2>
            <p>We&apos;re here to help. Contact us today to learn more about how we can assist you.</p>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
