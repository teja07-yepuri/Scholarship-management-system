import React from 'react';

const ApplicationSteps = ({ steps = [] }) => {
  if (!steps || steps.length === 0) {
    return (
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
        Step-by-step instructions follow the verified departmental notification guidelines.
      </p>
    );
  }

  return (
    <div>
      {steps.map((step, idx) => (
        <div key={idx} className="timeline-step">
          <div className="timeline-marker">{step.stepNumber || idx + 1}</div>
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '2px' }}>
              {step.title}
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationSteps;
