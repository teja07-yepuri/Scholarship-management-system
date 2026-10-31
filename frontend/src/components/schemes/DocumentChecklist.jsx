import React, { useState } from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import Badge from '../common/Badge';

const DocumentChecklist = ({ documents = [] }) => {
  const [checkedState, setCheckedState] = useState({});

  const toggleCheck = (index) => {
    setCheckedState((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const total = documents.length;
  const readyCount = Object.values(checkedState).filter(Boolean).length;
  const isAllReady = total > 0 && readyCount === total;

  return (
    <div>
      {/* Readiness Counter Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--space-3)',
          padding: '0.625rem 0.875rem',
          backgroundColor: isAllReady ? 'var(--color-success-bg)' : 'var(--color-surface-subtle)',
          borderRadius: 'var(--radius-md)',
          border: `1px solid ${isAllReady ? 'var(--color-success-border)' : 'var(--color-border)'}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
          <FileText size={15} color={isAllReady ? 'var(--color-success)' : 'var(--color-primary-navy)'} />
          <span>
            Document Readiness:{' '}
            <strong>
              {readyCount} of {total} Prepared
            </strong>
          </span>
        </div>
        {isAllReady && (
          <Badge variant="success" icon={CheckCircle2}>
            Ready to Apply
          </Badge>
        )}
      </div>

      {/* Checklist items */}
      <div>
        {documents.map((doc, idx) => {
          const isChecked = Boolean(checkedState[idx]);
          return (
            <label key={idx} className="checklist-item">
              <input
                type="checkbox"
                className="checklist-checkbox"
                checked={isChecked}
                onChange={() => toggleCheck(idx)}
              />
              <span
                style={{
                  fontSize: '0.875rem',
                  color: isChecked ? 'var(--color-text-muted)' : 'var(--color-text-main)',
                  textDecoration: isChecked ? 'line-through' : 'none',
                }}
              >
                {doc}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default DocumentChecklist;
