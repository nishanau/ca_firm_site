'use client';

import { useState } from 'react';
import { initEmailService, sendEmail } from '@/config/emailService';

// Initialize email service on client
if (typeof window !== 'undefined') {
  initEmailService();
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  phone?: string;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(formState.phone)) {
      newErrors.phone = 'Please enter a valid phone number (digits only)';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }

    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      
      // Convert FormState to Record<string, string> for email service
      const emailData = { ...formState } as unknown as Record<string, string>;
      await sendEmail(emailData);
      setSubmitStatus('success');
      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };
  
  return (
    <div className="contact-form-container">
      <h2>Send Us a Message</h2>
      
      {submitStatus === 'success' && (
        <div className="alert success">
          Thank you for your message! We&apos;ll get back to you as soon as possible.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="alert error">
          There was a problem sending your message. Please try again or contact us directly.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name <span className="required">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            placeholder="Your full name"
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="your.email@example.com"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number <span className="required">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="98XXXXXXXX"

            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject <span className="required">*</span></label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            className={errors.subject ? 'error' : ''}
            placeholder="How can we help you?"
          />
          {errors.subject && <div className="error-message">{errors.subject}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message <span className="required">*</span></label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            rows={6}
            placeholder="Please describe your inquiry in detail..."
          />
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>
        
        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      <style jsx>{`
        .contact-form-container {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 2rem;
        }
        
        h2 {
          margin-top: 0;
          margin-bottom: 1.5rem;
          color: var(--brand);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        .required {
          color: var(--danger);
        }
        
        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--bg);
          color: var(--text);
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--brand);
        }
        
        input.error, textarea.error {
          border-color: var(--danger);
        }
        
        .error-message {
          color: var(--danger);
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }
        
        .submit-button {
          background: linear-gradient(180deg, #1c2538, #1b2340);
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.2s;
        }
        
        .submit-button:hover:not(:disabled) {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .submit-button:active:not(:disabled) {
          transform: translateY(1px);
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .alert {
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }
        
        .alert.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: var(--success);
        }
        
        .alert.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: var(--danger);
        }
        
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
