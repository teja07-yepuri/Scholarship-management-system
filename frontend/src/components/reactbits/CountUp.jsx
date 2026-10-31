import React, { useEffect, useRef, useState } from 'react';

/**
 * CountUp - React Bits Component
 * Smoothly animates numbers from a starting value to an ending value
 * with robust formatting options (prefix, suffix, separator, decimals).
 */
const CountUp = ({
  start = 0,
  end = 0,
  duration = 1.8,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  className = '',
}) => {
  const [value, setValue] = useState(start);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  const startCounting = () => {
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = start + (end - start) * easedProgress;

      setValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(updateCount);
  };

  const formatNumber = (num) => {
    const fixed = num.toFixed(decimals);
    const [intPart, decPart] = fixed.split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decPart ? `${formattedInt}.${decPart}` : formattedInt;
  };

  return (
    <span ref={elementRef} className={`countup-number ${className}`}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
};

export default CountUp;
