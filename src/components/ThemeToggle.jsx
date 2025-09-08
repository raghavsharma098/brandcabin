import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/themes.css';

const ThemeToggle = ({ isDarkTheme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
