/**
 * EmailJS integration for contact form
 */
import emailjs from '@emailjs/browser';
import { siteSettings } from './siteSettings';

// Initialize EmailJS once on the client side
export const initEmailService = () => {
  // This function will be called on the client side
  if (typeof window !== 'undefined') {
    emailjs.init(siteSettings.contactForm.userID);
  }
};

/**
 * Send email using EmailJS
 * @param formData Form data from contact form
 * @returns Promise with the send result
 */
export const sendEmail = async (formData: Record<string, string>) => {
  // Return early if we're in a server environment
  if (typeof window === 'undefined') {
    console.error('EmailJS not available in server environment');
    return Promise.reject('EmailJS not available in server environment');
  }
  
  try {
    const templateParams = {
      ...formData,
      subject: formData.subject || siteSettings.contactForm.defaultSubject
    };
    
    return await emailjs.send(
      siteSettings.contactForm.emailServiceID,
      siteSettings.contactForm.templateID,
      templateParams
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return Promise.reject(error);
  }
};
