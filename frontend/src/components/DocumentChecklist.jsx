import React, { useState } from 'react';
import { CheckSquare, Square, FileText, CheckCircle2 } from 'lucide-react';

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
          padding: '0.65rem 1rem',
          background: isAllReady ? 'var(--accent-green-light)' : 'var(--slate-50)',
          borderRadius: 'var(--radius-md)',
          border: `1px solid ${isAllReady ? 'var(--accent-green)' : 'var(--slate-200)'}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
          <FileText size={16} color={isAllReady ? 'var(--accent-green-dark)' : 'var(--primary)'} />
          <span>
            Document Readiness:{' '}
            <strong>
              {readyCount} of {total} Prepared
            </strong>
          </span>
        </div>
        {isAllReady && (
          <span
            style={{
              color: 'var(--accent-green-dark)',
              fontSize: '0.8rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <CheckCircle2 size={14} /> Ready to Apply!
          </span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {documents.map((doc, idx) => {
          const isChecked = !!checkedState[idx];
          return (
            <label
              key={idx}
              className="checklist-item"
              style={{
                cursor: 'pointer',
                backgroundColor: isChecked ? '#f8fafc' : 'transparent',
                borderRadius: 'var(--radius-sm)',
                padding: '0.65rem 0.75rem',
              }}
            >
              <input
                type="checkbox"
                className="check-input"
                checked={isChecked}
                onChange={() => toggleCheck(idx)}
              />
              <span
                style={{
                  fontSize: '0.925rem',
                  color: isChecked ? 'var(--slate-500)' : 'var(--slate-800)',
                  textDecoration: isChecked ? 'line-through' : 'none',
                  lineHeight: '1.4',
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
