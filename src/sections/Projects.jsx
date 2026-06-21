import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <Container>
        <SectionHeading title="Selected Projects" />
        <div className="projects-grid">
          {portfolioData.selectedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
