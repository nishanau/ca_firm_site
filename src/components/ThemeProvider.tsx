'use client';

import { useEffect } from 'react';
import { getTheme } from '@/config/settingsUtils';

/**
 * ThemeProvider component
 * 
 * This component applies the theme colors from settings as CSS variables
 * It should be used in the layout to apply styles globally
 */
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = getTheme();

  useEffect(() => {
    // Add theme colors as CSS variables to :root
    const root = document.documentElement;
    
    // Set color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    
    // Set font variables
    root.style.setProperty('--font-body', theme.fonts.body);
    root.style.setProperty('--font-heading', theme.fonts.heading);
  }, [theme]);

  return <>{children}</>;
}
