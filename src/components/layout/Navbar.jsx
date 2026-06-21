import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Container from './Container';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (window.scrollY > 50) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 800);
      }
    }
  };

  return (
    <header className="glass-header navbar">
      <Container className="navbar-container">
        <span 
          className={`navbar-brand ${isAnimating ? 'animate-rubberBand' : ''}`}
          onClick={handleBrandClick}
          role="button"
          tabIndex={0}
        >
          Bhanu Vikas
        </span>
        <div className="navbar-right">
          <nav className="navbar-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
