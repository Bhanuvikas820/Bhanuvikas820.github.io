import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', href, onClick, className = '', type = 'button' }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${variantClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
