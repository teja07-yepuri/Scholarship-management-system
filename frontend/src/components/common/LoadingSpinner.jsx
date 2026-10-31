import React from 'react';

const LoadingSpinner = ({ message = 'Loading...', size = 'md' }) => {
  const dimension = size === 'sm' ? '18px' : size === 'lg' ? '36px' : '24px';

  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-text-secondary)' }}>
      <div
        style={{
          display: 'inline-block',
          width: dimension,
          height: dimension,
          border: '3px solid var(--color-border)',
          borderTopColor: 'var(--color-primary-navy)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
          marginBottom: '0.75rem',
        }}
      />
      {message && <div style={{ fontSize: '0.875rem' }}>{message}</div>}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
