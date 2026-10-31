import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  Building2,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Sparkles,
  Bookmark,
  BookmarkCheck,
} from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import SchemeStatus from '../components/schemes/SchemeStatus';
import DocumentChecklist from '../components/schemes/DocumentChecklist';
import ApplicationSteps from '../components/schemes/ApplicationSteps';
import SchemeCard from '../components/schemes/SchemeCard';
import { fetchSchemeByIdOrSlug, fetchSchemes } from '../services/api';

const SchemeDetails = () => {
  const { identifier } = useParams();
  const [scheme, setScheme] = useState(null);
  const [relatedSchemes, setRelatedSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('user_saved_schemes') || '[]');
      return saved.includes(identifier);
    } catch {
      return false;
    }
  });

  const handleToggleSave = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('user_saved_schemes') || '[]');
      let updated;
      const targetSlug = scheme?.slug || identifier;
      if (isSaved) {
        updated = saved.filter((id) => id !== targetSlug && id !== identifier);
        setIsSaved(false);
      } else {
        updated = [...saved, targetSlug];
        setIsSaved(true);
      }
      localStorage.setItem('user_saved_schemes', JSON.stringify(updated));
    } catch {}
  };

  useEffect(() => {
    const loadScheme = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchSchemeByIdOrSlug(identifier);
        if (res.success && res.data) {
          setScheme(res.data);
          // Fetch related schemes based on category
          if (res.data.categories && res.data.categories.length > 0) {
            const relRes = await fetchSchemes({
              category: res.data.categories[0],
              limit: 3,
            });
            if (relRes.success) {
              setRelatedSchemes(relRes.data.filter((s) => s.slug !== res.data.slug));
            }
          }
        } else {
          setError('Scheme record could not be found.');
        }
      } catch (err) {
        setError('Error loading scheme details.');
      } finally {
        setLoading(false);
      }
    };

    loadScheme();
  }, [identifier]);

  if (loading) {
    return (
      <div className="section">
        <PageContainer>
          <LoadingSpinner message="Loading scheme record..." />
        </PageContainer>
      </div>
    );
  }

  if (error || !scheme) {
    return (
      <div className="section">
        <PageContainer>
          <ErrorMessage message={error || 'Scheme not found.'} />
          <Button to="/browse" variant="secondary" icon={ChevronLeft}>
            Browse All Schemes
          </Button>
        </PageContainer>
      </div>
    );
  }

  const isScholarship = scheme.schemeType === 'Scholarship';
  const rules = scheme.eligibilityRules || {};

  return (
    <div className="section">
      <PageContainer>
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <Button to="/browse" variant="secondary" size="sm" icon={ChevronLeft}>
            Back to Catalog
          </Button>
        </div>

        {/* Scheme Header Card */}
        <div className="scheme-detail-header">
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <Badge variant={isScholarship ? 'scholarship' : 'welfare'}>
              {scheme.schemeType}
            </Badge>
            <Badge variant={scheme.governmentLevel === 'Central Government' ? 'central' : 'state'}>
              {scheme.governmentLevel}
            </Badge>
            {scheme.status && <SchemeStatus status={scheme.status} />}
          </div>

          <h1 className="scheme-detail-title">{scheme.name}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: 'var(--space-3)' }}>
            <Building2 size={15} />
            <span>{scheme.ministryOrDepartment}</span>
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', maxWidth: '800px', lineHeight: 1.6 }}>
            {scheme.shortDescription}
          </p>

          <div className="scheme-detail-meta-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={14} color="var(--color-primary-blue)" />
              <strong>Region:</strong> {scheme.states?.includes('All India') ? 'All India' : scheme.states?.join(', ')}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={14} color="var(--color-primary-blue)" />
              <strong>Deadline:</strong> {scheme.applicationDeadline || 'Open Cycle'}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={14} color="var(--color-primary-blue)" />
              <strong>Verified:</strong> {scheme.sourceVerifiedAt || 'Recently Verified'}
            </span>
          </div>
        </div>

        {/* Layout: Main Details (2fr) + Action Box (1fr) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)', alignItems: 'start' }}>
          {/* Main Content */}
          <div style={{ gridColumn: 'span 2' }}>
            {/* Overview */}
            <div className="scheme-detail-section">
              <h2 className="scheme-detail-section-title">
                <FileText size={18} color="var(--color-primary-navy)" /> Overview & Objectives
              </h2>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.9375rem', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
                {scheme.description}
              </p>
            </div>

            {/* Benefits */}
            <div className="scheme-detail-section">
              <h2 className="scheme-detail-section-title">
                <CheckCircle2 size={18} color="var(--color-success)" /> Verified Benefits
              </h2>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.9375rem', color: 'var(--color-text-main)', lineHeight: 1.7 }}>
                {scheme.benefits?.map((benefit, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="scheme-detail-section">
              <h2 className="scheme-detail-section-title">
                <Sparkles size={18} color="var(--color-primary-blue)" /> Eligibility Criteria
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <div className="glass-card" style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Age Range</div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{rules.minAge ?? 0} to {rules.maxAge ?? 120} Years</strong>
                </div>

                <div className="glass-card" style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Family Income Ceiling</div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                    {rules.maxFamilyIncome ? `Up to ₹${rules.maxFamilyIncome.toLocaleString('en-IN')}/year` : 'No ceiling specified'}
                  </strong>
                </div>

                <div className="glass-card" style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Social Category</div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{rules.applicableCategories?.join(', ') || 'All Categories'}</strong>
                </div>

                <div className="glass-card" style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Education</div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{rules.educationLevels?.join(', ') || 'Any Level'}</strong>
                </div>
              </div>

              {rules.additionalConditions && rules.additionalConditions.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.875rem', marginBottom: '6px' }}>Specific Requirements:</h4>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {rules.additionalConditions.map((cond, idx) => (
                      <li key={idx}>{cond}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Required Documents */}
            <div className="scheme-detail-section">
              <h2 className="scheme-detail-section-title">
                <FileText size={18} color="var(--color-primary-navy)" /> Required Documents Checklist
              </h2>
              <DocumentChecklist documents={scheme.requiredDocuments} />
            </div>

            {/* Application Steps */}
            <div className="scheme-detail-section">
              <h2 className="scheme-detail-section-title">
                <CheckCircle2 size={18} color="var(--color-primary-navy)" /> Step-by-Step Application Process
              </h2>
              <ApplicationSteps steps={scheme.applicationSteps} />
            </div>
          </div>

          {/* Action Box Sidebar */}
          <div>
            <div
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                position: 'sticky',
                top: 'calc(var(--navbar-height) + 1rem)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-3)', color: 'var(--color-text-main)' }}>Official Application</h3>

              <div
                className="glass-card"
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 'var(--space-4)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <div><strong>Submission Status:</strong> Open / Accepting Applications</div>
                <div style={{ marginTop: '4px' }}><strong>Cycle:</strong> {scheme.applicationDeadline || 'Ongoing'}</div>
              </div>

              {scheme.officialApplicationUrl && (
                <Button
                  href={scheme.officialApplicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  isBlock
                  icon={ExternalLink}
                  iconPosition="right"
                  style={{ marginBottom: 'var(--space-2)' }}
                >
                  Apply Online (Official Portal)
                </Button>
              )}

              {scheme.officialInformationUrl && (
                <Button
                  href={scheme.officialInformationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  isBlock
                  icon={ExternalLink}
                  iconPosition="right"
                  style={{ marginBottom: 'var(--space-2)' }}
                >
                  Official Guidelines Document
                </Button>
              )}

              <Button
                to="/eligibility-checker"
                variant="secondary"
                size="sm"
                isBlock
                icon={Sparkles}
                iconPosition="right"
                style={{ marginBottom: 'var(--space-2)' }}
              >
                Check Eligibility
              </Button>

              <Button
                variant={isSaved ? 'outline' : 'secondary'}
                size="sm"
                isBlock
                onClick={handleToggleSave}
                icon={isSaved ? BookmarkCheck : Bookmark}
                style={{
                  marginBottom: 'var(--space-4)',
                  borderColor: isSaved ? 'var(--color-success)' : undefined,
                  color: isSaved ? 'var(--color-success)' : undefined,
                }}
              >
                {isSaved ? 'Saved to Profile' : 'Save Scheme'}
              </Button>

              {/* Safety Advisory */}
              <div
                style={{
                  backgroundColor: 'var(--color-warning-bg)',
                  border: '1px solid var(--color-warning-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.75rem',
                  fontSize: '0.75rem',
                  color: 'var(--color-warning)',
                  lineHeight: 1.5,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700, marginBottom: '2px' }}>
                  <AlertTriangle size={13} /> Official Portal Verification
                </div>
                Never provide banking credentials or pay application fees to intermediary agents. Official central registrations are free on verified government portals.
              </div>
            </div>
          </div>
        </div>

        {/* Related Schemes */}
        {relatedSchemes.length > 0 && (
          <div style={{ marginTop: 'var(--space-12)' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-4)' }}>Related Schemes</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
              {relatedSchemes.map((rel) => (
                <SchemeCard key={rel._id || rel.slug} scheme={rel} />
              ))}
            </div>
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default SchemeDetails;
