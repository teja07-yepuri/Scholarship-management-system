import React from 'react';
import { RotateCcw, ShieldAlert, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import EmptyState from '../common/EmptyState';
import EligibilityResultCard from './EligibilityResultCard';

const EligibilityResults = ({ results, onReset }) => {
  if (!results) return null;

  const { potentiallyEligible = [], nearMatches = [], disclaimer } = results;

  return (
    <div>
      {/* Official Guidance & Disclaimer Banner */}
      <div
        style={{
          backgroundColor: 'var(--color-surface-subtle)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          marginBottom: 'var(--space-6)',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
        }}
      >
        <ShieldAlert size={20} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', display: 'block', marginBottom: '2px' }}>
            Preliminary Matching Notice
          </strong>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
            {disclaimer || 'Results are generated through automated rule matching against published guidelines. Final eligibility is determined exclusively by the competent government authority upon physical verification.'}
          </p>
        </div>
      </div>

      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2px' }}>
            Potentially Eligible Schemes ({potentiallyEligible.length})
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', margin: 0 }}>
            Schemes where your profile matches key age, income, category, and occupation criteria.
          </p>
        </div>

        <Button
          variant="secondary"
          size="sm"
          onClick={onReset}
          icon={RotateCcw}
        >
          Modify Profile
        </Button>
      </div>

      {/* Results List */}
      {potentiallyEligible.length === 0 ? (
        <EmptyState
          title="No exact matches found"
          description="None of the active schemes in the database matched all of your specified conditions. Try broadening your annual family income or education level criteria."
          action={
            <Button variant="primary" size="sm" onClick={onReset} icon={RotateCcw}>
              Adjust Form Answers
            </Button>
          }
        />
      ) : (
        <div>
          {potentiallyEligible.map(({ scheme, matchReasons, pendingVerificationNotes, confidence }) => (
            <EligibilityResultCard
              key={scheme._id || scheme.slug}
              scheme={scheme}
              matchReasons={matchReasons}
              pendingVerificationNotes={pendingVerificationNotes}
              confidence={confidence}
            />
          ))}
        </div>
      )}

      {/* Near Matches / Borderline */}
      {nearMatches.length > 0 && (
        <div style={{ marginTop: 'var(--space-8)' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-4)' }}>
            Partial Matches (Check Specific Conditions)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
            {nearMatches.map(({ scheme }) => (
              <div
                key={scheme._id || scheme.slug}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-4)',
                }}
              >
                <h4 style={{ fontSize: '0.9375rem', marginBottom: '4px' }}>{scheme.name}</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>
                  {scheme.shortDescription}
                </p>
                <Button
                  to={`/schemes/${scheme.slug || scheme._id}`}
                  variant="outline"
                  size="sm"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Inspect Requirements
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityResults;
