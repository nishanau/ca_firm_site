/**
 * Utility functions for working with site settings
 */

import { siteSettings } from './siteSettings';
import type { TeamMember, ServicePoint } from './types';

/**
 * Get all team members from settings
 */
export const getTeamMembers = (): TeamMember[] => {
  return siteSettings.team;
};

/**
 * Get a specific team member by name
 */
export const getTeamMemberByName = (name: string): TeamMember | undefined => {
  return siteSettings.team.find(member => member.name === name);
};

/**
 * Get all services from settings
 */
export const getServices = (): ServicePoint[] => {
  return siteSettings.services;
};

/**
 * Get a specific service by ID
 */
export const getServiceById = (id: string): ServicePoint | undefined => {
  return siteSettings.services.find(service => service.id === id);
};

/**
 * Get firm contact information
 */
export const getContactInfo = () => {
  return siteSettings.contact;
};

/**
 * Get firm values/principles
 */
export const getValues = () => {
  return siteSettings.values;
};

/**
 * Get client testimonials
 */
export const getTestimonials = () => {
  return siteSettings.testimonials;
};

/**
 * Get featured clients/industries
 */
export const getFeaturedClients = () => {
  return siteSettings.clients.featured;
};

/**
 * Get SEO settings for a specific page
 */
export const getSeoForPage = (pageName: string) => {
  const { defaultTitle, titleTemplate, description, ...restSeo } = siteSettings.seo;
  
  // Generate title based on page name or use default
  const title = pageName ? 
    titleTemplate.replace('%s', pageName) : 
    defaultTitle;
  
  return {
    title,
    description,
    ...restSeo
  };
};

/**
 * Get theme settings
 */
export const getTheme = () => {
  return siteSettings.theme;
};

/**
 * Get firm name and basic info
 */
export const getFirmInfo = () => {
  const { firmName, tagline, logo } = siteSettings;
  return { firmName, tagline, logo };
};
