'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/config/settingsUtils';
import type { Service } from '@/config/types';
import styles from './services.module.css';

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={styles.serviceCard} id={service.id}>
      <div className={styles.iconContainer}>
        <Image 
          src={service.icon} 
          alt={service.title} 
          width={40} 
          height={40} 
          className={styles.icon}
        />
      </div>
      
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.detailedDescription}</p>
      
      <ul className={styles.servicePoints}>
        {service.servicePoints.map((point: string, index: number) => (
          <li key={index} className={styles.servicePoint}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ServicesSidebar({ services }: { services: Service[] }) {
  return (
    <div className={styles.servicesSidebar}>
      <div className={styles.sidebarContent}>
        <h3>Our Services</h3>
        <ul className={styles.serviceLinks}>
          {services.map((service) => (
            <li key={service.id}>
              <a href={`#${service.id}`} className={styles.serviceLink}>
                {service.title}
              </a>
            </li>
          ))}
        </ul>
        
        <div className={styles.ctaBox}>
          <h4>Need Assistance?</h4>
          <p style={{ marginBottom: '1rem' }}>Contact us to discuss your specific requirements and how we can help.</p>
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const services = getServices();
  
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroSubtitle}>Comprehensive financial solutions to help your business succeed</p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesContent}>
            <div className="sidebar">
              <ServicesSidebar services={services} />
            </div>
            
            <div className="main-content">
              <div className={styles.intro}>
                <h2>Comprehensive Financial Services</h2>
                <p>
                  At Shrestha & Associates, we offer a wide range of financial services 
                  designed to meet the diverse needs of our clients. Our team of experienced 
                  professionals is committed to delivering exceptional service and valuable 
                  insights to help your business thrive.
                </p>
              </div>
              
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Tailored Solutions for Your Business</h2>
            <p style={{ marginBottom: '1rem' }}>
              Every business is unique, and so are its financial needs. 
              Contact us today to discuss how we can customize our services to meet your specific requirements.
            </p>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
