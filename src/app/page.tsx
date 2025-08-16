'use client';

import Link from 'next/link';
import { siteSettings } from '@/config/siteSettings';
import Services from '@/components/Services';
import TeamMembers from '@/components/TeamMembers';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const { firmName, tagline } = siteSettings;
  const values = siteSettings.values;
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{firmName}</h1>
            <p className="hero-subtitle">{tagline}</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <Link href="/services" className="btn">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive financial solutions to meet your business needs</p>
          
          <Services />
          
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link href="/services" className="btn">View All Services</Link>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide our professional practice</p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet our experienced professionals</p>
          
          <TeamMembers />
          
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link href="/about" className="btn">Learn More About Us</Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What our clients say about us</p>
          
          <Testimonials />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take Your Business to the Next Level?</h2>
            <p>Contact us today for a consultation and discover how our financial expertise can help your business thrive.</p>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
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
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .text-center {
          text-align: center;
        }

        .values-section {
          background: linear-gradient(180deg, var(--bg), var(--panel));
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .value-card {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 2rem;
          transition: transform 0.3s;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
        }
        
        .value-card h3 {
          color: var(--brand);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .value-card p {
          color: var(--muted);
          line-height: 1.6;
        }

        .testimonials-section {
          background: linear-gradient(180deg, var(--bg), var(--panel));
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
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
