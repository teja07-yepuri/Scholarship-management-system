import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ApplicationSteps = ({ steps = [] }) => {
  if (!steps || steps.length === 0) {
    return (
      <p style={{ color: 'var(--slate-500)', fontStyle: 'italic' }}>
        Step-by-step instructions are updated as per official department notification guidelines.
      </p>
    );
  }

  return (
    <div className="steps-timeline">
      {steps.map((step, idx) => (
        <div key={idx} className="step-row">
          <div className="step-marker">{step.stepNumber || idx + 1}</div>
          <div className="step-content">
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationSteps;
