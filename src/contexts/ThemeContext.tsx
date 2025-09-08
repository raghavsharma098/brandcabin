'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Always start with dark theme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force dark theme permanently - ignore system preferences and localStorage
    setIsDarkTheme(true);
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Keep this function for compatibility, but it won't actually change anything
    // since we want to force dark theme permanently
    const newTheme = true; // Always dark
    setIsDarkTheme(newTheme);
    
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  // Always provide the context, but include mounted state
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
