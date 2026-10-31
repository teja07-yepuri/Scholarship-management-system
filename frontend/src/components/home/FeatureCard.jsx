import React from 'react';
import { ArrowRight, Lock, CheckCircle } from 'lucide-react';
import SpotlightCard from '../reactbits/SpotlightCard';

/**
 * FeatureCard - React Bits Enhanced Card
 * Consistent card component with Lucide icon, role badge, title, concise description,
 * and clear hover interaction with SpotlightCard.
 */
const FeatureCard = ({
  title,
  description,
  icon: Icon,
  roleLabel = 'Student Service', // 'Student Service' | 'Coordinator Portal'
  isAdminOnly = false,
  isAuthenticated = false,
  onClick,
  actionText = 'Get Started',
  spotlightColor = 'rgba(37, 99, 235, 0.08)',
}) => {
  return (
    <SpotlightCard
      className="feature-card-item"
      spotlightColor={spotlightColor}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick();
        }
      }}
    >
      <div className="feature-card-content">
        <div className="feature-card-top">
          <div className="feature-icon-wrapper">
            <Icon size={22} className="feature-icon" strokeWidth={2.2} />
          </div>
          <span className={`feature-role-pill ${isAdminOnly ? 'role-admin' : 'role-student'}`}>
            {isAdminOnly && !isAuthenticated && <Lock size={10} className="role-lock-icon" />}
            {roleLabel}
          </span>
        </div>

        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-desc">{description}</p>

        <div className="feature-card-action">
          <span className="feature-action-label">{actionText}</span>
          <ArrowRight size={14} className="feature-action-arrow" />
        </div>
      </div>
    </SpotlightCard>
  );
};

export default FeatureCard;
