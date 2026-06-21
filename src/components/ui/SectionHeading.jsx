import React from 'react';
import './SectionHeading.css';

export const SectionLabel = ({ children }) => {
  return (
    <span className="section-label">
      {children}
    </span>
  );
};

export const SectionHeading = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`section-heading-wrapper ${className}`}>
      {subtitle && <SectionLabel>{subtitle}</SectionLabel>}
      <h2 className="section-heading">{title}</h2>
    </div>
  );
};

export default SectionHeading;
