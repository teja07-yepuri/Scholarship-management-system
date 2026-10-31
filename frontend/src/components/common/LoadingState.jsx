import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * LoadingState
 * Clean, accessible loading indicator
 */
const LoadingState = ({ message = 'Loading scholarships and welfare programs...', height = '260px' }) => {
  return (
    <div
      className="loading-state-container"
      style={{ minHeight: height }}
      role="status"
      aria-live="polite"
    >
      <Loader2 size={32} className="loading-spinner-animated" />
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default LoadingState;
