import React from 'react';
import SpotlightCard from '../reactbits/SpotlightCard';

/**
 * GlassCard
 * Reusable card with frosted glass styling and optional cursor tracking spotlight.
 */
const GlassCard = ({
  children,
  className = '',
  spotlight = true,
  spotlightColor = 'rgba(37, 99, 235, 0.09)',
  dark = false,
  onClick,
  style = {},
  as = 'div',
  ...props
}) => {
  const baseClass = dark ? 'glass-card-dark' : 'glass-card';

  if (spotlight) {
    return (
      <SpotlightCard
        className={`${baseClass} ${className}`.trim()}
        spotlightColor={dark ? 'rgba(99, 102, 241, 0.16)' : spotlightColor}
        onClick={onClick}
        style={style}
        as={as}
        {...props}
      >
        {children}
      </SpotlightCard>
    );
  }

  const Component = as;
  return (
    <Component
      className={`${baseClass} ${className}`.trim()}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;
