import React from 'react';

const GridPattern = ({
  className = '',
  size = 40,
  opacity = 0.1,
  color = '#ffffff',
  mask = true,
  ...props
}) => (
  <div 
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{
      backgroundImage: `
        linear-gradient(to right, ${color} 1px, transparent 1px),
        linear-gradient(to bottom, ${color} 1px, transparent 1px)
      `,
      backgroundSize: `${size}px ${size}px`,
      backgroundPosition: 'center center',
      opacity: opacity,
      maskImage: mask ? 'radial-gradient(ellipse at center, black, transparent 80%)' : 'none',
      WebkitMaskImage: mask ? 'radial-gradient(ellipse at center, black, transparent 80%)' : 'none'
    }}
    {...props}
  />
);

export default GridPattern;
