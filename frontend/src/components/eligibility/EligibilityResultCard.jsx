import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ExternalLink, ArrowRight, Award } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const EligibilityResultCard = ({
  scheme,
  matchReasons = [],
  pendingVerificationNotes = [],
  confidence = 'Moderate',
}) => {
  const isScholarship = scheme.schemeType === 'Scholarship';

  return (
    <article className="eligibility-result-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: 'var(--space-3)' }}>
        <div>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <Badge variant={isScholarship ? 'scholarship' : 'welfare'}>
              {scheme.schemeType}
            </Badge>
            <Badge variant={scheme.governmentLevel === 'Central Government' ? 'central' : 'state'}>
              {scheme.governmentLevel}
            </Badge>
            <Badge variant="success">
              {confidence} Match
            </Badge>
          </div>

          <h3 style={{ fontSize: '1.2rem', marginBottom: '2px' }}>
            <Link to={`/schemes/${scheme.slug || scheme._id}`}>{scheme.name}</Link>
          </h3>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
            {scheme.ministryOrDepartment}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button
            to={`/schemes/${scheme.slug || scheme._id}`}
            variant="secondary"
            size="sm"
            icon={ArrowRight}
            iconPosition="right"
          >
            View Details
          </Button>
          {scheme.officialApplicationUrl && (
            <Button
              href={scheme.officialApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
            >
              Apply Online
            </Button>
          )}
        </div>
      </div>

      {/* Why you match */}
      {matchReasons.length > 0 && (
        <div
          style={{
            backgroundColor: 'var(--color-success-bg)',
            border: '1px solid var(--color-success-border)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            marginBottom: 'var(--space-3)',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-success)', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <CheckCircle2 size={13} /> Why You May Qualify:
          </div>
          <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.8125rem', color: '#166534', lineHeight: 1.5 }}>
            {matchReasons.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Conditions to verify */}
      {pendingVerificationNotes && pendingVerificationNotes.length > 0 && (
        <div
          style={{
            backgroundColor: 'var(--color-warning-bg)',
            border: '1px solid var(--color-warning-border)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            marginBottom: 'var(--space-3)',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-warning)', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AlertTriangle size={13} /> Conditions to Confirm Before Applying:
          </div>
          <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.8125rem', color: '#854D0E', lineHeight: 1.5 }}>
            {pendingVerificationNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Benefits snippet & Deadline */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem', color: 'var(--color-text-secondary)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-2)' }}>
        <div>
          <strong>Verified Benefit:</strong> {scheme.benefits?.[0] || 'Direct government grant'}
        </div>
        <div>
          <strong>Deadline:</strong> {scheme.applicationDeadline || 'Open Cycle'}
        </div>
      </div>
    </article>
  );
};

export default EligibilityResultCard;
