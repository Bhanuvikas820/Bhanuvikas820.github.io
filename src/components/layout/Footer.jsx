import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Container from './Container';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} {portfolioData.candidate.name} • {portfolioData.candidate.location}</p>
        </div>
        <div className="footer-links">
          <a href={portfolioData.candidate.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={portfolioData.candidate.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${portfolioData.candidate.email}`}>Email</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
