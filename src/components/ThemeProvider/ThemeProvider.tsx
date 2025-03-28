import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Theme, ThemeContextType } from './type';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [theme, setTheme] = useState<Theme>('light');

   const toggleTheme = (value: Theme = 'light') => {
      setTheme(value);
      document.documentElement.setAttribute('data-theme', value);
      localStorage.setItem('theme', value);
   };

   const value = React.useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

   useEffect(() => {
      const localTheme = localStorage.getItem('theme');

      if (localTheme) {
         setTheme(localTheme as Theme);
      }

      document.documentElement.setAttribute('data-theme', localTheme ?? theme);
   }, []);

   return (
      <ThemeContext.Provider value={value}>
         {children}
      </ThemeContext.Provider>
   );
};

export const useTheme = (): ThemeContextType => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
};