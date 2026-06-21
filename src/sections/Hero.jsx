import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="availability-badge">
            <span className="status-dot"></span>
            <span className="hero-label">Available for select collaborations</span>
          </div>
          <h1 className="hero-title">{portfolioData.hero.headline}</h1>
          <p className="hero-desc">{portfolioData.hero.supportingCopy}</p>
          
          <div className="hero-actions">
            <Button href="#work" variant="primary">View Work</Button>
            <Button href="#contact" variant="secondary">Get in touch</Button>
          </div>
          
          <div className="hero-proof">
            {portfolioData.hero.proofStrip.map((item, i) => (
              <span key={i} className="tech-tag text-on-surface-variant">{item}</span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
