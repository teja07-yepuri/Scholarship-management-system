import React, { useRef, useState, useCallback } from 'react';
import './TiltedCard.css';

/**
 * TiltedCard - React Bits Component
 * Interactive 3D card that tilts smoothly toward the cursor on hover.
 * Kept restrained and professional for educational SaaS design.
 */
const TiltedCard = ({
  children,
  className = '',
  maxTilt = 6, // Restrained degrees
  scale = 1.015,
  perspective = 1000,
  onClick,
  ...rest
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTilt({ x: rotateX, y: rotateY });
    },
    [maxTilt]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`tilted-card-container ${isHovered ? 'hovered' : ''} ${className}`}
      style={{
        perspective: `${perspective}px`,
      }}
      {...rest}
    >
      <div
        className="tilted-card-inner"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${scale})`
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltedCard;
