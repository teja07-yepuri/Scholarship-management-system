import React from 'react';
import ShinyText from '../reactbits/ShinyText';
import BlurText from '../reactbits/BlurText';

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  animate = false,
  action,
  className = '',
}) => {
  return (
    <div
      className={`section-header ${centered ? 'text-center' : ''} ${className}`.trim()}
      style={
        action && !centered
          ? { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }
          : undefined
      }
    >
      <div>
        {eyebrow && (
          <div className="section-eyebrow-badge" style={{ marginBottom: 'var(--space-2)' }}>
            <span className="eyebrow-spark-dot" style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB', marginRight: '6px' }} />
            <ShinyText
              text={eyebrow}
              speed={3}
              color="#2563EB"
              className="section-eyebrow"
            />
          </div>
        )}
        {title && (
          animate ? (
            <BlurText
              text={title}
              as="h2"
              delay={50}
              animateBy="words"
              className="section-title"
            />
          ) : (
            <h2 className="section-title">{title}</h2>
          )
        )}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeader;
