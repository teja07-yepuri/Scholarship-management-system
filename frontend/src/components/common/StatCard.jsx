import React from 'react';
import CountUp from '../reactbits/CountUp';
import SpotlightCard from '../reactbits/SpotlightCard';

/**
 * StatCard
 * Reusable dashboard stat metric card with CountUp animation and cursor spotlight effect.
 */
const StatCard = ({
  label,
  value,
  prefix = '',
  suffix = '',
  icon: Icon,
  variant = 'blue', // 'blue' | 'navy' | 'green' | 'amber' | 'red'
  changeText,
  changePositive = true,
  onClick,
  className = '',
}) => {
  const variantStyles = {
    blue: {
      iconBg: 'rgba(37, 99, 235, 0.1)',
      iconColor: '#2563EB',
      spotlight: 'rgba(37, 99, 235, 0.12)',
      valColor: '#102A43',
    },
    navy: {
      iconBg: 'rgba(16, 42, 67, 0.08)',
      iconColor: '#102A43',
      spotlight: 'rgba(16, 42, 67, 0.1)',
      valColor: '#102A43',
    },
    green: {
      iconBg: 'rgba(22, 163, 74, 0.1)',
      iconColor: '#16A34A',
      spotlight: 'rgba(22, 163, 74, 0.12)',
      valColor: '#16A34A',
    },
    amber: {
      iconBg: 'rgba(217, 119, 6, 0.1)',
      iconColor: '#D97706',
      spotlight: 'rgba(217, 119, 6, 0.12)',
      valColor: '#D97706',
    },
    red: {
      iconBg: 'rgba(220, 38, 38, 0.1)',
      iconColor: '#DC2626',
      spotlight: 'rgba(220, 38, 38, 0.12)',
      valColor: '#DC2626',
    },
  }[variant] || {
    iconBg: 'rgba(37, 99, 235, 0.1)',
    iconColor: '#2563EB',
    spotlight: 'rgba(37, 99, 235, 0.1)',
    valColor: '#102A43',
  };

  const numericValue = typeof value === 'number' ? value : parseFloat(value) || 0;

  return (
    <SpotlightCard
      className={`stat-card-widget ${className}`}
      spotlightColor={variantStyles.spotlight}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="stat-card-body">
        <div className="stat-card-left">
          <span className="stat-card-label">{label}</span>
          <div className="stat-card-val-row" style={{ color: variantStyles.valColor }}>
            <CountUp
              end={numericValue}
              duration={1.8}
              prefix={prefix}
              suffix={suffix}
              className="stat-card-number"
            />
          </div>
          {changeText && (
            <span className={`stat-card-subtext ${changePositive ? 'positive' : 'neutral'}`}>
              {changeText}
            </span>
          )}
        </div>
        {Icon && (
          <div
            className="stat-card-icon-pill"
            style={{
              backgroundColor: variantStyles.iconBg,
              color: variantStyles.iconColor,
            }}
          >
            <Icon size={20} strokeWidth={2.2} />
          </div>
        )}
      </div>
    </SpotlightCard>
  );
};

export default StatCard;
