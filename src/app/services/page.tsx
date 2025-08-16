'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/config/settingsUtils';
import type { Service } from '@/config/types';

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="service-card" id={service.id}>
      <div className="icon-container">
        <Image 
          src={service.icon} 
          alt={service.title} 
          width={40} 
          height={40} 
          className="icon"
        />
      </div>
      
      <h3 className="title">{service.title}</h3>
      <p className="description">{service.detailedDescription}</p>
      
      <ul className="service-points">
        {service.servicePoints.map((point: string, index: number) => (
          <li key={index} className="service-point">{point}</li>
        ))}
      </ul>
      
      <style jsx>{`
        .service-card {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 2.5rem;
          margin-bottom: 2.5rem;
          scroll-margin-top: 80px;
        }
        
        .icon-container {
          background: var(--chip);
          width: 80px;
          height: 80px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        
        .title {
          font-size: 1.75rem;
          color: var(--brand);
          margin-bottom: 1rem;
        }
        
        .description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text);
          margin-bottom: 2rem;
        }
        
        .service-points {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }
        
        .service-point {
          display: flex;
          align-items: center;
          color: var(--muted);
        }
        
        .service-point:before {
          content: "✓";
          color: var(--brand);
          margin-right: 0.5rem;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .service-points {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

function ServicesSidebar({ services }: { services: Service[] }) {
  return (
    <div className="services-sidebar">
      <div className="sidebar-content">
        <h3>Our Services</h3>
        <ul className="service-links">
          {services.map((service) => (
            <li key={service.id}>
              <a href={`#${service.id}`} className="service-link">
                {service.title}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="cta-box">
          <h4>Need Assistance?</h4>
          <p>Contact us to discuss your specific requirements and how we can help.</p>
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </div>
      
      <style jsx>{`
        .services-sidebar {
          position: sticky;
          top: 100px;
        }
        
        .sidebar-content {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.5rem;
        }
        
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--brand);
        }
        
        .service-links {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }
        
        .service-link {
          display: block;
          padding: 0.75rem 0;
          color: var(--text);
          text-decoration: none;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s;
        }
        
        .service-link:hover {
          color: var(--brand);
        }
        
        .cta-box {
          background: var(--chip);
          border-radius: 10px;
          padding: 1.5rem;
          margin-top: 2rem;
        }
        
        .cta-box h4 {
          color: var(--brand);
          margin-bottom: 1rem;
        }
        
        .cta-box p {
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .services-sidebar {
            position: static;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default function ServicesPage() {
  const services = getServices();
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">Comprehensive financial solutions to help your business succeed</p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="services-content">
            <div className="sidebar">
              <ServicesSidebar services={services} />
            </div>
            
            <div className="main-content">
              <div className="intro">
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
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Tailored Solutions for Your Business</h2>
            <p>
              Every business is unique, and so are its financial needs. 
              Contact us today to discuss how we can customize our services to meet your specific requirements.
            </p>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          padding: 6rem 0;
          border-bottom: 1px solid var(--border);
          text-align: center;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, var(--brand), var(--brandAlt));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--muted);
          margin-bottom: 2.5rem;
        }
        
        .services-content {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 3rem;
        }
        
        .intro {
          margin-bottom: 3rem;
        }
        
        .intro h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--brand);
        }
        
        .intro p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text);
        }
        
        .cta-section {
          background: linear-gradient(120deg, var(--panel), var(--panelAlt));
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        
        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .cta-content h2 {
          font-size: 2.25rem;
          margin-bottom: 1.5rem;
          color: var(--brand);
        }
        
        .cta-content p {
          font-size: 1.2rem;
          color: var(--muted);
          margin-bottom: 2rem;
        }
        
        @media (max-width: 968px) {
          .services-content {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 4rem 0;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
