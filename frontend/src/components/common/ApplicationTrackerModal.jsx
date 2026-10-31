import React, { useState } from 'react';
import { X, Search, CheckCircle, Clock, AlertCircle, FileText, Calendar, Building2 } from 'lucide-react';
import { trackApplication } from '../../services/api';

const mockRegistry = [
  {
    refNo: 'APP-2026-001',
    studentName: 'Mark Henry',
    schemeName: 'Post-Matric Scholarship for SC Students',
    ministry: 'Ministry of Social Justice and Empowerment',
    date: '2026-10-18',
    status: 'Pending',
    remark: 'Application under verification at State Nodal Office.',
    nextStep: 'Awaiting institute document scrutiny and bank account seeding.',
  },
  {
    refNo: 'APP-2026-002',
    studentName: 'Samantha Fernando',
    schemeName: 'Central Sector Scheme of Scholarships for College and University Students',
    ministry: 'Department of Higher Education',
    date: '2026-10-14',
    status: 'Approved',
    remark: 'Sanction order generated. Disbursal scheduled via PFMS Direct Benefit Transfer.',
    nextStep: 'Check registered Aadhaar-linked bank account for DBT payment alert.',
  },
  {
    refNo: 'APP-2026-003',
    studentName: 'Albert De Silva',
    schemeName: 'Pragati Scholarship Scheme for Girl Students (AICTE)',
    ministry: 'All India Council for Technical Education (AICTE)',
    date: '2026-10-21',
    status: 'Pending',
    remark: 'Income certificate verification in progress.',
    nextStep: 'No action required from applicant at this time.',
  },
  {
    refNo: 'APP-2026-004',
    studentName: 'Romesh Jayawardena',
    schemeName: 'Central Sector Scheme of Scholarships for College and University Students',
    ministry: 'Department of Higher Education',
    date: '2026-10-09',
    status: 'Rejected',
    remark: 'Annual family income exceeded statutory limit of ₹4.5 Lakhs.',
    nextStep: 'You may apply for alternative central merit-cum-means assistance.',
  },
  {
    refNo: 'APP-2026-005',
    studentName: 'Kalan Madhusanka',
    schemeName: 'National Fellowship and Scholarship for Higher Education of ST Students',
    ministry: 'Ministry of Tribal Affairs',
    date: '2026-10-11',
    status: 'Approved',
    remark: 'Academic credentials verified by University Registrar.',
    nextStep: 'Annual continuation grant approved for academic year 2026-27.',
  },
];

const ApplicationTrackerModal = ({ isOpen, onClose, initialRef = '' }) => {
  const [query, setQuery] = useState(initialRef || '');
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searching, setSearching] = useState(false);

  React.useEffect(() => {
    if (initialRef && isOpen) {
      setQuery(initialRef);
      performSearch(initialRef);
    }
  }, [initialRef, isOpen]);

  const performSearch = async (searchTerm) => {
    const clean = (searchTerm || '').trim();
    if (!clean) return;

    setHasSearched(true);
    setSearching(true);

    try {
      // 1. Try real backend API
      const res = await trackApplication(clean);
      if (res.success && res.data) {
        setResult({
          refNo: res.data.refNo,
          studentName: res.data.studentName,
          schemeName: res.data.schemeName,
          ministry: res.data.ministry || 'Government of India',
          date: res.data.applicationDate || res.data.date || '2026-10-20',
          status: res.data.status,
          remark: res.data.remark || 'Application under institutional scrutiny.',
          nextStep: res.data.nextStep || 'Awaiting document verification.',
        });
        setSearching(false);
        return;
      }
    } catch (e) {
      // Backend didn't find or errored, fallback to local registries
    }

    // 2. Check local storage & mock registry
    const studentSaved = JSON.parse(localStorage.getItem('student_registered_applications') || '[]');
    const coordinatorSaved = JSON.parse(localStorage.getItem('coordinator_applications_data') || '[]');

    const normalizedCoord = coordinatorSaved.map(app => ({
      refNo: app.refNo || `APP-2026-${app.id}`,
      studentName: app.name,
      schemeName: app.scheme,
      ministry: 'Ministry of Social Justice / State Department',
      date: app.date || '2026-10-20',
      status: app.status,
      remark: app.status === 'Approved' ? 'Application approved and sanctioned.' : app.status === 'Rejected' ? 'Application criteria did not qualify.' : 'Verification currently underway.',
      nextStep: app.status === 'Approved' ? 'DBT transfer in progress.' : 'Institute document scrutiny.'
    }));

    const combined = [...studentSaved, ...normalizedCoord, ...mockRegistry];
    const cleanLower = clean.toLowerCase();

    const match = combined.find(
      (item) =>
        (item.refNo && item.refNo.toLowerCase().includes(cleanLower)) ||
        (item.studentName && item.studentName.toLowerCase().includes(cleanLower)) ||
        (item.email && item.email.toLowerCase().includes(cleanLower))
    );

    setResult(match || null);
    setSearching(false);
  };

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch(query);
  };

  const getStatusBadge = (status) => {
    if (status === 'Approved') {
      return (
        <span className="badge badge-success" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
          <CheckCircle size={14} /> Approved & Sanctioned
        </span>
      );
    }
    if (status === 'Rejected') {
      return (
        <span className="badge badge-danger" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
          <AlertCircle size={14} /> Rejected / Ineligible
        </span>
      );
    }
    return (
      <span className="badge badge-warning" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
        <Clock size={14} /> In Review / Pending
      </span>
    );
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog formal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header formal-modal-header">
          <div>
            <span className="formal-modal-eyebrow">National Portal Service</span>
            <h2 className="modal-title">Track Scholarship Application</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: 'var(--space-6)' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: 'var(--space-4)' }}>
            Enter your <strong>Application Reference Number</strong> (e.g. <code>APP-2026-001</code>) or your <strong>Full Name</strong> to check real-time sanction status.
          </p>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="e.g. APP-2026-001 or Mark Henry"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                autoFocus
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Track Status
            </button>
          </form>

          {/* Quick Click Suggestions */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: 'var(--space-6)', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Quick Test Queries:</span>
            {['APP-2026-001', 'Samantha Fernando', 'APP-2026-004'].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => {
                  setQuery(sample);
                  const clean = sample.toLowerCase();
                  const match = mockRegistry.find(
                    (m) => m.refNo.toLowerCase().includes(clean) || m.studentName.toLowerCase().includes(clean)
                  );
                  setHasSearched(true);
                  setResult(match || null);
                }}
                className="quick-sample-chip"
              >
                {sample}
              </button>
            ))}
          </div>

          {/* Search Result */}
          {hasSearched && (
            <div>
              {result ? (
                <div className="track-result-box">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <span className="track-ref-label">Reference ID:</span>
                      <strong className="track-ref-no">{result.refNo}</strong>
                    </div>
                    {getStatusBadge(result.status)}
                  </div>

                  <div className="track-field-group">
                    <div className="track-field">
                      <span className="track-field-label">Applicant Name</span>
                      <strong className="track-field-value">{result.studentName}</strong>
                    </div>
                    <div className="track-field">
                      <span className="track-field-label">Application Date</span>
                      <span className="track-field-value">{result.date}</span>
                    </div>
                  </div>

                  <div className="track-field" style={{ marginTop: 'var(--space-3)' }}>
                    <span className="track-field-label">Scholarship Program</span>
                    <strong className="track-field-value" style={{ color: 'var(--color-primary-navy)' }}>
                      {result.schemeName}
                    </strong>
                  </div>

                  <div className="track-field" style={{ marginTop: 'var(--space-2)' }}>
                    <span className="track-field-label">Sanctioning Authority</span>
                    <span className="track-field-value">{result.ministry}</span>
                  </div>

                  <div className="track-status-detail-box" style={{ marginTop: 'var(--space-4)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '4px', color: 'var(--color-text-main)' }}>
                      Authority Remarks:
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                      {result.remark}
                    </p>
                    {result.nextStep && (
                      <div style={{ marginTop: '8px', fontSize: '0.785rem', color: 'var(--color-primary-blue)', fontWeight: 500 }}>
                        <strong>Next Step:</strong> {result.nextStep}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="track-not-found-box">
                  <AlertCircle size={24} color="var(--color-warning)" />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.95rem' }}>No Application Record Found</h4>
                    <p style={{ margin: '4px 0 0', fontSize: '0.8125rem' }}>
                      No record matched "{query}". Please verify the application registration number on your submission receipt.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="modal-footer" style={{ borderTop: '1px solid var(--color-border)', padding: 'var(--space-4) var(--space-6)', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTrackerModal;
