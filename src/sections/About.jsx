import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import './About.css';
// import profileImg from '../../backup_assets/Bhanu.jpg'; // We'll copy this over soon

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-container">
              {/* <img src={profileImg} alt="Bhanu Vikas" className="about-image" /> */}
              <div className="about-image-placeholder">
                 <img src="/Bhanu.jpg" alt="Bhanu Vikas" className="about-image" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading title="From Core Fundamentals to Deployable Systems" subtitle="About" />
            <div className="about-text">
              {portfolioData.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
