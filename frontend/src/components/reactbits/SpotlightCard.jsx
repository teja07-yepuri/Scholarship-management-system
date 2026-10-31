import React, { useRef, useState, useCallback } from 'react';
import './SpotlightCard.css';

/**
 * SpotlightCard - React Bits Component
 * An interactive card container featuring a dynamic mouse-tracking spotlight/glow effect.
 * Optimized with CSS variables for 60-120fps performance and zero React re-renders on move.
 */
const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(37, 99, 235, 0.08)',
  spotlightBorderColor = 'rgba(37, 99, 235, 0.35)',
  spotlightSize = 320,
  onClick,
  style = {},
  as = 'div',
  ...rest
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const Component = as;

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`spotlight-card ${isHovered ? 'is-hovered' : ''} ${className}`}
      style={{
        '--spotlight-color': spotlightColor,
        '--spotlight-border-color': spotlightBorderColor,
        '--spotlight-size': `${spotlightSize}px`,
        ...style,
      }}
      {...rest}
    >
      <div className="spotlight-overlay" aria-hidden="true" />
      <div className="spotlight-card-content">{children}</div>
    </Component>
  );
};

export default SpotlightCard;
