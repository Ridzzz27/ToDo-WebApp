import React, { useState, useEffect } from 'react';
import './App.css';

const ToggleButton = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <button
      className={`toggle-button ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle dark/light theme"
    >
      <div className="slider" />
    </button>
  );
};

export default ToggleButton;