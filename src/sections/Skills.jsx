import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="skills-grid">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map(item => (
                  <li key={item}><span className="skill-dot"></span>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
