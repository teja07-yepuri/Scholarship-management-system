import React, { useRef, useState, useCallback } from 'react';
import './Magnet.css';

/**
 * Magnet - React Bits Component
 * Gentle magnetic attraction towards cursor for a primary CTA button.
 */
const Magnet = ({
  children,
  className = '',
  strength = 18,
  active = true,
  ...rest
}) => {
  const magnetRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!active || !magnetRef.current) return;
      const rect = magnetRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      setPosition({
        x: deltaX * strength,
        y: deltaY * strength,
      });
    },
    [strength, active]
  );

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnet-wrapper ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Magnet;
