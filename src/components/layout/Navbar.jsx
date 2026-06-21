import React from 'react';
import Container from './Container';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="glass-header navbar">
      <Container className="navbar-container">
        <span className="navbar-brand">Bhanu Vikas</span>
        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
