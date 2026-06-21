import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card group">
      <div className="project-card-image-placeholder">
        {/* Placeholder if no image provided, using CSS background */}
      </div>
      <div className="project-card-tags">
        {project.tags.map(tag => (
          <span key={tag} className="tech-tag text-on-surface-variant mr-2 block mb-2">{tag} • </span>
        ))}
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-desc">{project.description}</p>
      {project.link && (
        <a href={project.link} className="project-card-link">
          <MdArrowForward className="project-card-icon" size={24} />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
