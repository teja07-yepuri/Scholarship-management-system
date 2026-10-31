import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Modal
 * Reusable modal overlay using translucent glassmorphic styling,
 * keyboard accessibility (Esc to close), and body scroll lock.
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = '560px',
  className = '',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose && onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="glass-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="glass-modal-title"
    >
      <div
        className={`glass-modal ${className}`.trim()}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: 'var(--space-6) var(--space-6) var(--space-4) var(--space-6)',
            borderBottom: '1px solid rgba(226, 232, 240, 0.7)',
          }}
        >
          <div>
            {title && (
              <h3
                id="glass-modal-title"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-navy)',
                  margin: 0,
                }}
              >
                {title}
              </h3>
            )}
            {subtitle && (
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  margin: '4px 0 0 0',
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'rgba(241, 245, 249, 0.8)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              borderRadius: 'var(--radius-full)',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = 'var(--color-text-main)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(241, 245, 249, 0.8)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'var(--space-6)' }}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
