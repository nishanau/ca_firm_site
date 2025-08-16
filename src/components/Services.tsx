'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getServices } from '@/config/settingsUtils';
import type { ServicePoint } from '@/config/types';

interface ServiceCardProps {
  service: ServicePoint;
  detailed?: boolean;
}

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <Image 
          src={service.icon} 
          alt={service.title} 
          width={48} 
          height={48} 
        />
      </div>
      
      <h3>{service.title}</h3>
      <p className="description">{service.shortDescription}</p>
      
      {detailed && (
        <>
          <div className="detailed-description">
            <p>{service.detailedDescription}</p>
          </div>
          
          <div className="service-points">
            <h4>Our Offerings</h4>
            <ul>
              {service.servicePoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      
      {!detailed && (
        <div className="read-more">
          <Link href={`/services/${service.id}`}>
            Learn More
          </Link>
        </div>
      )}
      
      <style jsx>{`
        .service-card {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 2rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .service-icon {
          background: var(--chip);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        
        h3 {
          font-size: 1.5rem;
          margin: 0 0 1rem;
          color: var(--text);
        }
        
        .description {
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        
        .detailed-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .service-points h4 {
          color: var(--brand);
          margin-bottom: 0.5rem;
        }
        
        .service-points ul {
          padding-left: 1.5rem;
        }
        
        .service-points li {
          margin-bottom: 0.5rem;
        }
        
        .read-more {
          margin-top: 1.5rem;
        }
        
        .read-more a {
          display: inline-block;
          color: var(--brand);
          text-decoration: none;
          font-weight: 500;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
        }
        
        .read-more a:hover {
          border-color: var(--brand);
        }
      `}</style>
    </div>
  );
}

export default function Services({ detailed = false }: { detailed?: boolean }) {
  const services = getServices();
  
  return (
    <div className="services-grid">
      {services.map((service) => (
        <ServiceCard 
          key={service.id} 
          service={service} 
          detailed={detailed} 
        />
      ))}
      
      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
