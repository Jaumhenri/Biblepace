import React from 'react';
import './Button.css';

export function Button({ 
  children, 
  variant = 'black', 
  size = 'md', 
  icon: Icon,
  className = '', 
  ...props 
}) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className}`} 
      {...props}
    >
      <span>{children}</span>
      {Icon && <Icon className="btn-icon" size={16} />}
    </button>
  );
}
