import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Calendar,
  FileCheck,
  Award,
  ArrowRight,
  Info,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

const EligibilityResults = ({ results, onReset }) => {
  if (!results) return null;

  const { potentiallyEligible = [], nearMatches = [], disclaimer } = results;

  return (
    <div style={{ marginTop: '2.5rem' }}>
      {/* Disclaimer Banner */}
      <div
        style={{
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
        }}
      >
        <ShieldCheck size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ color: 'var(--primary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
            Official Guidance & Rule-Based Matching Notice
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--slate-700)', margin: 0, lineHeight: 1.5 }}>
            {disclaimer}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--slate-900)' }}>
            Potentially Eligible Schemes ({potentiallyEligible.length})
          </h2>
          <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem' }}>
            Based on rule matching against your submitted profile parameters.
          </p>
        </div>
        <button onClick={onReset} className="btn btn-secondary btn-sm">
          <RotateCcw size={14} /> Modify My Answers
        </button>
      </div>

      {potentiallyEligible.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--slate-200)',
          }}
        >
          <div
            style={{
              width: '4rem',
              height: '4rem',
              borderRadius: 'var(--radius-full)',
              background: '#fef3c7',
              color: '#d97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <AlertCircle size={32} />
          </div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>No Direct Matches Found</h3>
          <p style={{ color: 'var(--slate-600)', maxWidth: '550px', margin: '0 auto 1.75rem' }}>
            We could not find an exact match for the precise combination of age, category, or income
            you entered. Consider broadening your criteria or browsing all available welfare schemes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={onReset} className="btn btn-primary">
              <RotateCcw size={16} /> Adjust Form Answers
            </button>
            <Link to="/browse" className="btn btn-secondary">
              Browse All Schemes Catalog
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {potentiallyEligible.map(({ scheme, matchReasons, pendingVerificationNotes, confidence }) => (
            <div
              key={scheme._id || scheme.slug}
              style={{
                background: '#ffffff',
                border: '1px solid var(--slate-200)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-scholarship">
                      <Award size={12} /> {scheme.schemeType}
                    </span>
                    <span className="badge badge-central">{scheme.governmentLevel}</span>
                    <span
                      style={{
                        background: '#ecfdf5',
                        color: '#047857',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid #a7f3d0',
                      }}
                    >
                      {confidence} Match
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', margin: 0 }}>
                    <Link to={`/schemes/${scheme.slug || scheme._id}`}>{scheme.name}</Link>
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-500)', marginTop: '0.25rem' }}>
                    {scheme.ministryOrDepartment}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link to={`/schemes/${scheme.slug || scheme._id}`} className="btn btn-secondary btn-sm">
                    View Details
                  </Link>
                  {scheme.officialApplicationUrl && (
                    <a
                      href={scheme.officialApplicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <span>Apply Official</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Why it matches */}
              <div
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.25rem',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#15803d', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} /> Why You May Be Eligible:
                </div>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.875rem', color: '#166534', lineHeight: 1.5 }}>
                  {matchReasons.map((reason, idx) => (
                    <li key={idx} style={{ marginBottom: '0.25rem' }}>{reason}</li>
                  ))}
                </ul>
              </div>

              {/* Conditions to verify */}
              {pendingVerificationNotes && pendingVerificationNotes.length > 0 && (
                <div
                  style={{
                    background: '#fffbeb',
                    border: '1px solid #fde68a',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1.25rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ fontSize: '0.775rem', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Info size={14} /> Additional Conditions to Verify Before Applying:
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.85rem', color: '#78350f', lineHeight: 1.5 }}>
                    {pendingVerificationNotes.map((note, idx) => (
                      <li key={idx} style={{ marginBottom: '0.2rem' }}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits & Documents snippet */}
              <div className="grid-2" style={{ gap: '1rem', marginTop: '1rem', fontSize: '0.875rem' }}>
                <div style={{ background: 'var(--slate-50)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                  <strong style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--slate-800)' }}>
                    Benefits Offered:
                  </strong>
                  <span style={{ color: 'var(--slate-600)' }}>{scheme.benefits?.[0]}</span>
                </div>
                <div style={{ background: 'var(--slate-50)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                  <strong style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--slate-800)' }}>
                    Key Required Documents:
                  </strong>
                  <span style={{ color: 'var(--slate-600)' }}>
                    {scheme.requiredDocuments?.slice(0, 3).join(', ')}
                    {scheme.requiredDocuments?.length > 3 ? '...' : ''}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--slate-100)', fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                <span>
                  <strong>Deadline:</strong> {scheme.applicationDeadline || 'Open Enrollment'}
                </span>
                {scheme.officialInformationUrl && (
                  <a
                    href={scheme.officialInformationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--primary)' }}
                  >
                    Official Portal Source <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Near Matches if present */}
      {nearMatches.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--slate-800)', marginBottom: '1rem' }}>
            Related / Borderline Schemes (Check Criteria)
          </h3>
          <div className="grid-3">
            {nearMatches.map(({ scheme }) => (
              <div key={scheme._id || scheme.slug} className="card" style={{ padding: '1.25rem' }}>
                <span className="badge badge-welfare" style={{ marginBottom: '0.5rem' }}>
                  {scheme.schemeType}
                </span>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                  <Link to={`/schemes/${scheme.slug || scheme._id}`}>{scheme.name}</Link>
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)', marginBottom: '1rem' }}>
                  {scheme.shortDescription}
                </p>
                <Link to={`/schemes/${scheme.slug || scheme._id}`} className="btn btn-secondary btn-sm btn-block">
                  Inspect Requirements
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityResults;
