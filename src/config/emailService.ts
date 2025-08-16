/**
 * EmailJS integration for contact form
 */
import { siteSettings } from './siteSettings';

// Initialize EmailJS once on the client side
export const initEmailService = () => {
  // This function will be called on the client side
  if (typeof window !== 'undefined' && window.emailjs) {
    window.emailjs.init(siteSettings.contactForm.userID);
  }
};

/**
 * Send email using EmailJS
 * @param formData Form data from contact form
 * @returns Promise with the send result
 */
export const sendEmail = async (formData: Record<string, string>) => {
  // Return early if we're in a server environment
  if (typeof window === 'undefined' || !window.emailjs) {
    console.error('EmailJS not available');
    return Promise.reject('EmailJS not available');
  }
  
  try {
    const templateParams = {
      ...formData,
      subject: formData.subject || siteSettings.contactForm.defaultSubject
    };
    
    return await window.emailjs.send(
      siteSettings.contactForm.emailServiceID,
      siteSettings.contactForm.templateID,
      templateParams
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return Promise.reject(error);
  }
};

// Type declaration for window.emailjs
declare global {
  interface Window {
    emailjs: {
      init: (userID: string) => void;
      send: (
        serviceID: string,
        templateID: string,
        templateParams: Record<string, unknown>
      ) => Promise<{status: number; text: string}>;
    };
  }
}
