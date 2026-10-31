import React, { useEffect, useRef, useState } from 'react';
import './FadeContent.css';

/**
 * FadeContent - React Bits Component
 * Reveals content smoothly with opacity and subtle slide as sections enter the viewport.
 */
const FadeContent = ({
  children,
  blur = false,
  duration = 600,
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
  delay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setInView(true);
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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`fade-content-wrapper ${inView ? 'in-view' : ''} ${blur ? 'has-blur' : ''} ${className}`}
      style={{
        '--fade-duration': `${duration}ms`,
        '--fade-easing': easing,
        '--fade-delay': `${delay}ms`,
        '--initial-opacity': initialOpacity,
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
