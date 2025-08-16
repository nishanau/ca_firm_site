/**
 * Type definitions for the site settings
 * These types ensure consistency and type safety when accessing settings
 */

export interface SocialMediaLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
}

export interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: Address;
  googleMapsUrl: string;
  socialMedia: SocialMediaLinks;
}

export interface TeamMember {
  name: string;
  title: string;
  photo: string;
  qualifications: string;
  experience: string;
  specialization: string;
  bio: string;
  linkedin: string;
}

export interface ServicePoint {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  detailedDescription: string;
  servicePoints: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  detailedDescription: string;
  servicePoints: string[];
}

export interface Value {
  title: string;
  description: string;
}

export interface Testimonial {
  clientName: string;
  company: string;
  testimonial: string;
  photo?: string;
}

export interface ClientInfo {
  featured: string[];
  logos: Array<{ name: string; logo: string }>;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export interface ContactFormSettings {
  emailServiceID: string;
  templateID: string;
  userID: string;
  defaultSubject: string;
  redirectUrl: string;
  formFields: FormField[];
}

export interface SEOSettings {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
}

export interface ThemeColors {
  bg: string;
  panel: string;
  panelAlt: string;
  text: string;
  muted: string;
  brand: string;
  brandAlt: string;
  success: string;
  warning: string;
  danger: string;
  chip: string;
  border: string;
}

export interface ThemeFonts {
  body: string;
  heading: string;
}

export interface ThemeSettings {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export interface SiteSettings {
  firmName: string;
  tagline: string;
  logo: {
    text: string;
    imagePath: string;
  };
  contact: ContactInfo;
  team: TeamMember[];
  services: ServicePoint[];
  values: Value[];
  testimonials: Testimonial[];
  clients: ClientInfo;
  contactForm: ContactFormSettings;
  seo: SEOSettings;
  theme: ThemeSettings;
}
