import React from 'react';
import { Home, Search, AlertCircle } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <PageContainer style={{ textAlign: 'center', maxWidth: '520px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'var(--color-surface-subtle)',
            color: 'var(--color-text-secondary)',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--space-4)',
          }}
        >
          <AlertCircle size={26} />
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>404</h1>
        <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Page Not Found</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', marginBottom: 'var(--space-6)' }}>
          The requested page or scheme record could not be found. It may have been moved or updated.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Button to="/" variant="primary" icon={Home}>
            Return Home
          </Button>
          <Button to="/browse" variant="secondary" icon={Search}>
            Browse Schemes
          </Button>
        </div>
      </PageContainer>
    </div>
  );
};

export default NotFound;
