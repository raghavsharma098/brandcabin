import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import './styles/main.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', !isDarkTheme ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <div className="content">
        {/* Your existing content goes here */}
      </div>
    </div>
  );
}

export default App;
