'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getTestimonials } from '@/config/settingsUtils';
import type { Testimonial as TestimonialType } from '@/config/types';

function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <div className="testimonial-card">
      <div className="quote-mark">&ldquo;</div>
      <p className="testimonial-text">{testimonial.testimonial}</p>
      
      <div className="client-info">
        {testimonial.photo && (
          <div className="client-photo">
            <Image 
              src={testimonial.photo} 
              alt={testimonial.clientName} 
              width={60} 
              height={60} 
            />
          </div>
        )}
        
        <div className="client-details">
          <p className="client-name">{testimonial.clientName}</p>
          <p className="client-company">{testimonial.company}</p>
        </div>
      </div>
      
      <style jsx>{`
        .testimonial-card {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 2rem;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .quote-mark {
          font-size: 4rem;
          line-height: 1;
          color: var(--brand);
          opacity: 0.5;
          position: absolute;
          top: 1rem;
          left: 1.5rem;
        }
        
        .testimonial-text {
          margin: 1.5rem 0;
          line-height: 1.7;
          flex-grow: 1;
          position: relative;
          z-index: 1;
        }
        
        .client-info {
          display: flex;
          align-items: center;
          margin-top: auto;
        }
        
        .client-photo {
          margin-right: 1rem;
          border-radius: 50%;
          overflow: hidden;
          width: 60px;
          height: 60px;
        }
        
        .client-name {
          font-weight: 600;
          margin: 0 0 0.25rem;
        }
        
        .client-company {
          color: var(--muted);
          font-size: 0.9rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = getTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  if (testimonials.length === 0) {
    return null;
  }
  
  return (
    <div className="testimonials-container">
      <div className="testimonials-slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      
      {testimonials.length > 1 && (
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      <style jsx>{`
        .testimonials-container {
          overflow: hidden;
          position: relative;
          padding-bottom: 2.5rem;
        }
        
        .testimonials-slider {
          display: flex;
          transition: transform 0.5s ease;
        }
        
        .testimonial-slide {
          min-width: 100%;
          padding: 0 1rem;
        }
        
        .testimonials-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--border);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .dot.active {
          background: var(--brand);
        }
      `}</style>
    </div>
  );
}
