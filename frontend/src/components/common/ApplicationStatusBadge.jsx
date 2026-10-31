import React from 'react';
import { CheckCircle2, Clock, XCircle, AlertCircle } from 'lucide-react';

/**
 * ApplicationStatusBadge
 * Reusable, accessible status badge for application states (Approved, Pending, Rejected, Under Review)
 */
const ApplicationStatusBadge = ({ status = 'Pending', size = 'sm', showIcon = true }) => {
  const normalized = (status || '').toLowerCase().trim();

  let config = {
    label: 'Pending',
    className: 'badge-status-pending',
    icon: Clock,
  };

  if (normalized.includes('approv')) {
    config = {
      label: 'Approved',
      className: 'badge-status-approved',
      icon: CheckCircle2,
    };
  } else if (normalized.includes('reject')) {
    config = {
      label: 'Rejected',
      className: 'badge-status-rejected',
      icon: XCircle,
    };
  } else if (normalized.includes('review') || normalized.includes('progress')) {
    config = {
      label: 'Under Review',
      className: 'badge-status-review',
      icon: AlertCircle,
    };
  }

  const Icon = config.icon;

  return (
    <span className={`status-badge-pill ${config.className} size-${size}`}>
      {showIcon && <Icon size={size === 'sm' ? 12 : 14} className="status-badge-icon" />}
      <span>{config.label}</span>
    </span>
  );
};

export default ApplicationStatusBadge;
