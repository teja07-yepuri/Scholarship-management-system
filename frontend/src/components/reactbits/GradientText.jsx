import React from 'react';
import './GradientText.css';

/**
 * GradientText - Official React Bits Component
 * An animated text component that smoothly transitions gradients across words.
 * https://reactbits.dev/text-animations/gradient-text
 */
export default function GradientText({
  children,
  className = '',
  colors = ['#2563EB', '#6366F1', '#38BDF8', '#2563EB'],
  animationSpeed = 6,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`.trim()}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle} />}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
