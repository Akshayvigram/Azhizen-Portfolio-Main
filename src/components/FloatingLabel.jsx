import React from 'react';

const FloatingLabel = ({ src, alt, className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] z-20 transition-transform duration-300 hover:scale-105 ${className}`}
    />
  );
};

export default FloatingLabel;
