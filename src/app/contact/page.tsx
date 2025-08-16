'use client';

import Image from 'next/image';
import { siteSettings } from '@/config/siteSettings';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';

export default function ContactPage() {
  const { contact } = siteSettings;
  const { email, phone, address, googleMapsUrl, socialMedia } = contact;
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">Get in touch with our team of professionals</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Have questions about our services or want to schedule a consultation? 
                Our team is ready to assist you. Contact us using any of the methods below.
              </p>
              
              <div className="info-cards">
                <div className="info-card">
                  <div className="icon-container">
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
                
                <div className="info-card">
                  <div className="icon-container">
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
                
                <div className="info-card">
                  <div className="icon-container">
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
                <div className="social-links">
                  <a 
                    href={socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    Facebook
                  </a>
                  <a 
                    href={socialMedia.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link twitter"
                  >
                    Twitter
                  </a>
                  <a 
                    href={socialMedia.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link linkedin"
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
          <div className="map-container">
            <GoogleMap url={googleMapsUrl} />
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
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        .contact-info h2, .contact-form-container h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--brand);
        }
        
        .contact-intro {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text);
          margin-bottom: 2.5rem;
        }
        
        .info-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        
        .info-card {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        
        .icon-container {
          background: var(--chip);
          width: 50px;
          height: 50px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .info-card h3 {
          font-size: 1.25rem;
          color: var(--brand);
          margin-bottom: 0.75rem;
        }
        
        .info-card p {
          color: var(--muted);
          line-height: 1.6;
        }
        
        .contact-link {
          color: var(--brand);
          text-decoration: none;
          transition: opacity 0.2s;
        }
        
        .contact-link:hover {
          opacity: 0.8;
        }
        
        .social-media h3 {
          font-size: 1.25rem;
          color: var(--brand);
          margin-bottom: 1rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.2s;
        }
        
        .facebook {
          color: #1877f2;
          background: rgba(24, 119, 242, 0.1);
        }
        
        .facebook:hover {
          background: rgba(24, 119, 242, 0.2);
        }
        
        .twitter {
          color: #1da1f2;
          background: rgba(29, 161, 242, 0.1);
        }
        
        .twitter:hover {
          background: rgba(29, 161, 242, 0.2);
        }
        
        .linkedin {
          color: #0077b5;
          background: rgba(0, 119, 181, 0.1);
        }
        
        .linkedin:hover {
          background: rgba(0, 119, 181, 0.2);
        }
        
        .contact-form-container {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 2.5rem;
        }
        
        .map-section {
          background: linear-gradient(180deg, var(--bg), var(--panel));
        }
        
        .map-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 2rem;
          color: var(--brand);
        }
        
        .map-container {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          height: 450px;
        }
        
        @media (max-width: 968px) {
          .contact-grid {
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
          
          .social-links {
            flex-direction: column;
          }
          
          .map-container {
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}
