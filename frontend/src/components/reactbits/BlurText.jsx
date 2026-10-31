import React, { useEffect, useRef, useState } from 'react';
import './BlurText.css';

/**
 * BlurText - React Bits Component
 * Reveals text elements by smoothly transitioning them from a blurred state
 * into crisp focus, staggered by word or character.
 * Supports prefers-reduced-motion.
 */
const BlurText = ({
  text = '',
  delay = 70,
  animateBy = 'words', // 'words' | 'characters'
  direction = 'top', // 'top' | 'bottom'
  threshold = 0.1,
  className = '',
  as = 'h1',
  onAnimationComplete,
}) => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setInView(true);
      if (onAnimationComplete) onAnimationComplete();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, onAnimationComplete]);

  const elements = animateBy === 'characters' ? text.split('') : text.split(' ');

  useEffect(() => {
    if (inView && onAnimationComplete) {
      const totalDuration = elements.length * delay + 500;
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, totalDuration);
      return () => clearTimeout(timer);
    }
  }, [inView, elements.length, delay, onAnimationComplete]);

  const Component = as;

  return (
    <Component ref={containerRef} className={`blur-text-container ${className}`}>
      {elements.map((el, index) => {
        const itemDelay = `${index * delay}ms`;
        return (
          <span
            key={index}
            className={`blur-text-item ${inView ? 'revealed' : ''} direction-${direction}`}
            style={{
              transitionDelay: itemDelay,
              display: 'inline-block',
              marginRight: animateBy === 'words' ? '0.28em' : '0',
            }}
          >
            {el === ' ' ? '\u00A0' : el}
          </span>
        );
      })}
    </Component>
  );
};

export default BlurText;
