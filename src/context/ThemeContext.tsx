import React, { createContext, useContext } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always dark mode now
  const isDark = true;
  const toggleTheme = () => {}; // No-op function

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="dark bg-gray-900 min-h-screen">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};