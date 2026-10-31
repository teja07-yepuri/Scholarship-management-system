import React from 'react';
import './ShinyText.css';

/**
 * ShinyText - React Bits Component
 * Adds a subtle, sleek light reflection/sheen effect that sweeps across text.
 */
const ShinyText = ({
  text,
  children,
  disabled = false,
  speed = 4,
  className = '',
  color = '#2563EB',
}) => {
  const content = text || children;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        animationDuration: `${speed}s`,
        '--shiny-base-color': color,
      }}
    >
      {content}
    </span>
  );
};

export default ShinyText;
