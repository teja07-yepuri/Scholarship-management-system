import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, User, ShieldCheck, Eye, EyeOff, Sparkles, ArrowRight } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/common/Button';
import ErrorMessage from '../components/common/ErrorMessage';
import BlurText from '../components/reactbits/BlurText';
import ShinyText from '../components/reactbits/ShinyText';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
  const [identifier, setIdentifier] = useState('admin');
  const [password, setPassword] = useState('Admin@12345');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await login(identifier, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid administrator credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setIdentifier('admin');
    setPassword('Admin@12345');
  };

  return (
    <div
      className="section"
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <PageContainer style={{ maxWidth: '440px' }}>
        <div
          className="glass-panel"
          style={{
            padding: 'var(--space-8) var(--space-6)',
            boxShadow: '0 20px 50px rgba(16, 33, 58, 0.12), inset 0 1px 1px rgba(255, 255, 255, 1)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          {/* Header & Icon */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                background: 'linear-gradient(135deg, #10213A 0%, #1E3A5F 100%)',
                color: '#fff',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-4)',
                boxShadow: '0 8px 20px rgba(16, 33, 58, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <ShieldCheck size={26} />
            </div>

            <div style={{ display: 'inline-block', marginBottom: '6px' }}>
              <ShinyText
                text="Authorized Coordinator Access"
                speed={3}
                color="#2563EB"
                className="eyebrow-shiny-text"
              />
            </div>

            <h1
              style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                marginBottom: '6px',
                letterSpacing: '-0.02em',
              }}
            >
              Admin Portal
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Sign in to manage central & state schemes catalog, review student applications, and audit quotas.
            </p>
          </div>

          <ErrorMessage message={error} onDismiss={() => setError(null)} />

          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: 'var(--space-4)' }}>
              <label className="form-label" htmlFor="adm-id">
                Username or Email
              </label>
              <div style={{ position: 'relative' }}>
                <User
                  size={17}
                  color="var(--color-primary-blue)"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  id="adm-id"
                  type="text"
                  required
                  placeholder="Enter administrator ID"
                  className="glass-input"
                  style={{ width: '100%', paddingLeft: '2.5rem' }}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: 'var(--space-5)' }}>
              <label className="form-label" htmlFor="adm-pass">
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={17}
                  color="var(--color-primary-blue)"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  id="adm-pass"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter secure password"
                  className="glass-input"
                  style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              isBlock
              loading={loading}
              icon={ArrowRight}
              iconPosition="right"
              style={{
                boxShadow: '0 8px 24px rgba(16, 33, 58, 0.25)',
                padding: '0.75rem 1.25rem',
              }}
            >
              Sign In to Management Console
            </Button>
          </form>

          {/* Quick local dev credential pill */}
          <div
            style={{
              marginTop: 'var(--space-6)',
              padding: '0.85rem',
              background: 'rgba(238, 242, 255, 0.7)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(199, 210, 254, 0.8)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.75rem',
              color: 'var(--color-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
            }}
          >
            <div>
              <span style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}>Default Dev Account:</span>{' '}
              <code>admin</code> / <code>Admin@12345</code>
            </div>
            <button
              type="button"
              onClick={handleFillDemo}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(147, 197, 253, 0.8)',
                color: 'var(--color-primary-blue)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.7rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Fill
            </button>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default AdminLogin;
