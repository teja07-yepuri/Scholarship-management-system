import React from 'react';
import { CheckCircle2, Clock, XCircle, ShieldCheck, Sparkles, Award } from 'lucide-react';

/**
 * StatusBadge
 * Glassmorphic status and category pill badge with icons.
 */
const StatusBadge = ({
  status = 'pending', // 'approved' | 'pending' | 'rejected' | 'active' | 'scholarship' | 'central' | 'state'
  label,
  size = 'md',
  className = '',
}) => {
  const normalized = (status || '').toLowerCase().trim();

  const config = {
    approved: {
      icon: CheckCircle2,
      text: label || 'Approved',
      styleClass: 'glass-badge-green',
    },
    active: {
      icon: CheckCircle2,
      text: label || 'Active',
      styleClass: 'glass-badge-green',
    },
    pending: {
      icon: Clock,
      text: label || 'Under Review',
      styleClass: 'glass-badge-amber',
    },
    review: {
      icon: Clock,
      text: label || 'Under Review',
      styleClass: 'glass-badge-amber',
    },
    rejected: {
      icon: XCircle,
      text: label || 'Rejected',
      styleClass: 'glass-badge-red',
    },
    scholarship: {
      icon: Award,
      text: label || 'Scholarship',
      styleClass: 'glass-badge-blue',
    },
    central: {
      icon: ShieldCheck,
      text: label || 'Central Gov',
      styleClass: 'glass-badge-indigo',
    },
    state: {
      icon: Sparkles,
      text: label || 'State Scheme',
      styleClass: 'glass-badge-blue',
    },
  }[normalized] || {
    icon: Sparkles,
    text: label || status,
    styleClass: 'glass-badge-blue',
  };

  const Icon = config.icon;

  return (
    <span
      className={`glass-badge ${config.styleClass} ${size === 'sm' ? 'glass-badge-sm' : ''} ${className}`.trim()}
    >
      <Icon size={size === 'sm' ? 12 : 14} />
      <span>{config.text}</span>
    </span>
  );
};

export default StatusBadge;
