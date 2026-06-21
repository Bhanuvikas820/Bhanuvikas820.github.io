import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import { portfolioData } from '../data/portfolioData';
import { MdMilitaryTech, MdGroups } from 'react-icons/md';
import './Direction.css';

const Direction = () => {
  return (
    <section className="direction-section">
      <Container>
        <div className="direction-grid">
          <motion.div 
            className="direction-card primary-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <MdMilitaryTech className="direction-icon text-primary-fixed" />
            <div>
              <h4 className="direction-title">AWS Cloud Practitioner</h4>
              <p className="direction-desc uppercase-sub">Candidate / In-Progress Certification</p>
            </div>
          </motion.div>

          <motion.div 
            className="direction-card secondary-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MdGroups className="direction-icon text-tertiary" />
            <div>
              <h4 className="direction-title">Achievements</h4>
              <ul className="direction-list">
                {portfolioData.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Direction;
