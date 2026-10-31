import React from 'react';

/**
 * AcademicLogo
 * Vector emblem matching the formal Scholarship Management System logo:
 * Academic Mortarboard Cap + Open Book + Gold Ribbon/Coin Emblem.
 */
const AcademicLogo = ({ size = 'md', showText = true, textColor = 'navy', light = false }) => {
  const iconDimensions = {
    sm: { width: 34, height: 34, scale: 0.75 },
    md: { width: 44, height: 44, scale: 1 },
    lg: { width: 58, height: 58, scale: 1.3 },
    xl: { width: 72, height: 72, scale: 1.6 },
  }[size] || { width: 44, height: 44, scale: 1 };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      {/* SVG Emblem */}
      <svg
        width={iconDimensions.width}
        height={iconDimensions.height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 2px 4px rgba(11, 37, 69, 0.15))' }}
      >
        {/* Academic Mortarboard Cap */}
        {/* Cap Top Diamond */}
        <polygon
          points="32,4 58,16 32,27 6,16"
          fill="#1d4ed8"
          stroke="#0b2545"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Cap Skull Under-band */}
        <path
          d="M17 19.5V26.5C17 31 23.7 34.5 32 34.5C40.3 34.5 47 31 47 26.5V19.5"
          fill="#0b2545"
          stroke="#0b2545"
          strokeWidth="1.5"
        />
        {/* Tassel Button & String */}
        <circle cx="32" cy="15.5" r="2.5" fill="#f59e0b" />
        <path
          d="M32 15.5L52 23V31"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Tassel Fringe */}
        <polygon points="50,31 54,31 53,37 51,37" fill="#f59e0b" />

        {/* Open Book Pages */}
        {/* Left Page */}
        <path
          d="M32 40.5C23 37.5 13 38 6 41.5V56.5C13 53 23 52.5 32 55.5V40.5Z"
          fill="#38bdf8"
          stroke="#0284c7"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11 44C17 42 24 42 28 44"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <path
          d="M11 48C17 46 24 46 28 48"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        {/* Right Page */}
        <path
          d="M32 40.5C41 37.5 51 38 58 41.5V56.5C51 53 41 52.5 32 55.5V40.5Z"
          fill="#0284c7"
          stroke="#0b2545"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M36 44C40 42 47 42 53 44"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <path
          d="M36 48C40 46 47 46 53 48"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        {/* Book Spine Center Line */}
        <path d="M32 39V57" stroke="#0b2545" strokeWidth="2.5" strokeLinecap="round" />

        {/* Golden Central Seal / Medallion */}
        <circle cx="32" cy="46" r="6" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <text
          x="32"
          y="49"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="bold"
          fill="#78350f"
          fontFamily="system-ui"
        >
          ₹
        </text>
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span
            style={{
              fontSize: size === 'lg' ? '1.5rem' : size === 'sm' ? '1.05rem' : '1.25rem',
              fontWeight: 900,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: light ? '#ffffff' : textColor === 'navy' ? '#0b2545' : '#1e3a8a',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Scholarship
          </span>
          <span
            style={{
              fontSize: size === 'lg' ? '1.15rem' : size === 'sm' ? '0.78rem' : '0.92rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: light ? '#93c5fd' : '#2563eb',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Management System
          </span>
        </div>
      )}
    </div>
  );
};

export default AcademicLogo;
