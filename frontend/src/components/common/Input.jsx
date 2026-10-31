import React from 'react';

/**
 * Input
 * Form control with translucent glass aesthetics, accessible labels,
 * optional leading icon, and error feedback.
 */
const Input = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  helpText,
  icon: Icon,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`form-group ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label} {required && <span style={{ color: 'var(--color-danger)' }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', width: '100%' }}>
        {Icon && (
          <div
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--color-text-muted)',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon size={16} />
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className="glass-input"
          style={{
            width: '100%',
            paddingLeft: Icon ? '38px' : '14px',
            borderColor: error ? 'var(--color-danger)' : undefined,
          }}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
          {...props}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="form-help" style={{ color: 'var(--color-danger)' }}>
          {error}
        </p>
      )}
      {!error && helpText && (
        <p id={`${id}-help`} className="form-help">
          {helpText}
        </p>
      )}
    </div>
  );
};

export default Input;
