import React from 'react';
import './Tag.css';

const Tag = ({ children, className = '' }) => {
  return (
    <span className={`tag ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
