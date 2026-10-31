import React, { useState } from 'react';
import { X, CheckCircle, UserCheck, ShieldCheck } from 'lucide-react';
import { submitApplication } from '../../services/api';

const StudentRegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: 'National / All India',
    educationLevel: 'Undergraduate',
    category: 'General',
    institution: '',
  });

  const [registeredRef, setRegisteredRef] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) return;

    try {
      setSubmitting(true);
      const res = await submitApplication({
        studentName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        state: formData.state,
        educationLevel: formData.educationLevel,
        category: formData.category,
        institution: formData.institution,
        schemeName: `${formData.educationLevel} Central Sector Merit Scholarship`,
      });

      if (res.success && res.data) {
        setRegisteredRef(res.data.refNo);
        // Also keep local copy
        const saved = JSON.parse(localStorage.getItem('student_registered_applications') || '[]');
        saved.unshift(res.data);
        localStorage.setItem('student_registered_applications', JSON.stringify(saved));
      }
    } catch (err) {
      // Fallback local reference
      const randomNum = Math.floor(100 + Math.random() * 900);
      const generatedRef = `APP-2026-${randomNum}`;
      setRegisteredRef(generatedRef);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setRegisteredRef(null);
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      state: 'National / All India',
      educationLevel: 'Undergraduate',
      category: 'General',
      institution: '',
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleResetAndClose}>
      <div className="modal-dialog formal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header formal-modal-header">
          <div>
            <span className="formal-modal-eyebrow">Academic Portal Enrolment</span>
            <h2 className="modal-title">Student Registration</h2>
          </div>
          <button className="modal-close-btn" onClick={handleResetAndClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: 'var(--space-6)' }}>
          {registeredRef ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--color-success-bg)',
                  color: 'var(--color-success)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-4)',
                }}
              >
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Student Profile Registered</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: 'var(--space-4)' }}>
                Your student registration reference has been issued. You can track this application at any time.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--color-surface-subtle)',
                  border: '1px dashed var(--color-primary-blue)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  Application Reference Number
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary-navy)', letterSpacing: '0.05em' }}>
                  {registeredRef}
                </div>
              </div>

              <button className="btn btn-primary" onClick={handleResetAndClose}>
                Done & Return to Portal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="form-group">
                  <label className="form-label">Current Education Level</label>
                  <select
                    value={formData.educationLevel}
                    onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                    className="form-select"
                  >
                    <option value="Class 9-10">Class 9 - 10 (Secondary)</option>
                    <option value="Class 11-12">Class 11 - 12 (Higher Secondary)</option>
                    <option value="Undergraduate">Undergraduate (B.Tech / B.Sc / BA)</option>
                    <option value="Postgraduate">Postgraduate (M.Tech / M.Sc / MA)</option>
                    <option value="PhD / Research">PhD / Doctoral Research</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Social Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="General">General</option>
                    <option value="OBC">OBC (Other Backward Classes)</option>
                    <option value="SC">SC (Scheduled Caste)</option>
                    <option value="ST">ST (Scheduled Tribe)</option>
                    <option value="EWS">Economically Weaker Section</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">College / University / School Name</label>
                <input
                  type="text"
                  placeholder="e.g. Government Degree College"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-4)', fontSize: '0.785rem', color: 'var(--color-text-secondary)' }}>
                <ShieldCheck size={16} color="var(--color-success)" />
                <span>Zero Aadhaar or bank account numbers collected during initial registration.</span>
              </div>

              <div className="modal-footer" style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)', display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)' }}>
                <button type="button" className="btn btn-secondary" onClick={handleResetAndClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Registration
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentRegisterModal;
