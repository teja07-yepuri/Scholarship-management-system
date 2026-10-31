import React from 'react';
import { Search } from 'lucide-react';

const EmptyState = ({
  icon: Icon = Search,
  title = 'No records found',
  description = 'Try modifying your search or clearing applied filters.',
  action,
}) => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '3.5rem 1.5rem',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          backgroundColor: 'var(--color-surface-subtle)',
          color: 'var(--color-text-secondary)',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
        }}
      >
        <Icon size={22} />
      </div>
      <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{title}</h3>
      <p style={{ color: 'var(--color-text-secondary)', maxWidth: '440px', margin: '0 auto 1.25rem', fontSize: '0.875rem' }}>
        {description}
      </p>
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
