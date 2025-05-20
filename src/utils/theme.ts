import { useEffect, useState } from 'react';
import { ThemeMode } from '../types';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  
  useEffect(() => {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    
    // If found in localStorage, use that
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } 
    // Otherwise check for system preference
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  
  return { theme, toggleTheme };
};