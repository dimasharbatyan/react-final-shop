import React, { useState } from 'react';
import '../index.css';  

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleTheme} className={isDarkMode ? 'dark-theme' : 'light-theme'}>
    </button>
  );
};

export default ThemeToggle;
