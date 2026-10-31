import React from 'react';

/**
 * GlassPanel
 * Reusable primitive for translucent frosted glass surfaces.
 * Supports light, dark, subtle, and elevated variants.
 */
const GlassPanel = ({
  children,
  className = '',
  variant = 'default', // 'default' | 'subtle' | 'elevated' | 'dark'
  as: Component = 'div',
  style = {},
  ...props
}) => {
  const variantClass = {
    default: 'glass-panel',
    subtle: 'glass-panel-subtle',
    elevated: 'glass-panel-elevated',
    dark: 'glass-panel-dark',
  }[variant] || 'glass-panel';

  return (
    <Component className={`${variantClass} ${className}`.trim()} style={style} {...props}>
      {children}
    </Component>
  );
};

export default GlassPanel;
