import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import Button from './Button';

/**
 * ErrorState
 * Clean error presentation with retry action
 */
const ErrorState = ({
  title = 'Unable to load data',
  message = 'There was a problem communicating with the server. Please check your connection or retry.',
  onRetry,
}) => {
  return (
    <div className="error-state-box" role="alert">
      <div className="error-icon-circle">
        <AlertCircle size={24} />
      </div>
      <h3 className="error-title">{title}</h3>
      <p className="error-description">{message}</p>
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          icon={RefreshCw}
          onClick={onRetry}
          className="error-retry-btn"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
