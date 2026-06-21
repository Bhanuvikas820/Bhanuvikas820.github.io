import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import './EngineeringApproach.css';

const EngineeringApproach = () => {
  return (
    <section className="approach-section">
      <Container>
        <SectionHeading title="Engineering Approach" className="text-center" />
        <div className="approach-grid">
          <div className="approach-line"></div>
          {portfolioData.engineeringApproach.map((item, index) => (
            <motion.div
              key={index}
              className="approach-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="approach-number">{index + 1}</div>
              <h4 className="approach-title">{item.title}</h4>
              <p className="approach-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EngineeringApproach;
