import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Plus, Trash2, ArrowLeft } from 'lucide-react';
import Button from '../common/Button';
import ErrorMessage from '../common/ErrorMessage';
import LoadingSpinner from '../common/LoadingSpinner';
import { fetchSchemeByIdOrSlug, createScheme, updateScheme, fetchCategories } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const AdminSchemeForm = ({ schemeId }) => {
  const isEditing = Boolean(schemeId);
  const navigate = useNavigate();
  const { token: authToken } = useAuth();

  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(isEditing);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    shortDescription: '',
    description: '',
    schemeType: 'Scholarship',
    governmentLevel: 'Central Government',
    ministryOrDepartment: 'Ministry of Education',
    categories: ['students'],
    states: ['All India'],
    benefits: ['Full tuition fee reimbursement', 'Annual maintenance stipend'],
    eligibilityRules: {
      minAge: 16,
      maxAge: 30,
      maxFamilyIncome: 300000,
      educationLevels: ['Undergraduate', 'Postgraduate'],
      applicableCategories: ['All'],
      gender: 'All',
      occupations: ['Student'],
      disabilityOnly: false,
      additionalConditions: ['Must have passed qualifying examination with at least 60% marks.'],
    },
    requiredDocuments: [
      'Aadhaar Card',
      'Income Certificate issued by Revenue Authority',
      'Previous Academic Marksheet',
      'Current Academic Year Fee Receipt',
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Eligibility & Gather Certificates',
        description: 'Verify your income and caste certificates are up to date.',
      },
      {
        stepNumber: 2,
        title: 'Register on Official Portal',
        description: 'Create an account on the official portal with Aadhaar OTP authentication.',
      },
      {
        stepNumber: 3,
        title: 'Submit Application & Documents',
        description: 'Upload scans and save your application acknowledgement ID.',
      },
    ],
    applicationStartDate: 'July every year',
    applicationDeadline: 'October 31',
    officialInformationUrl: 'https://scholarships.gov.in',
    officialApplicationUrl: 'https://scholarships.gov.in',
    sourceVerifiedAt: new Date().toISOString().split('T')[0],
    status: 'Active',
    isFeatured: false,
  });

  useEffect(() => {
    fetchCategories().then((res) => {
      if (res.success) setCategoriesList(res.data);
    });

    if (isEditing) {
      fetchSchemeByIdOrSlug(schemeId)
        .then((res) => {
          if (res.success && res.data) {
            setFormData(res.data);
          } else {
            setError('Scheme record could not be loaded.');
          }
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [schemeId, isEditing]);

  const handleSimpleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRuleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      eligibilityRules: {
        ...prev.eligibilityRules,
        [field]: value,
      },
    }));
  };

  const handleAddArrayItem = (field, initialVal = '') => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] || []), initialVal],
    }));
  };

  const handleUpdateArrayItem = (field, index, value) => {
    setFormData((prev) => {
      const updated = [...(prev[field] || [])];
      updated[index] = value;
      return { ...prev, [field]: updated };
    });
  };

  const handleRemoveArrayItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError(null);
      const token = authToken || localStorage.getItem('schemes_finder_admin_token');

      if (isEditing) {
        await updateScheme(schemeId, formData, token);
      } else {
        await createScheme(formData, token);
      }

      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Error saving scheme. Please verify all required inputs.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading scheme data..." />;
  }

  return (
    <div style={{ maxWidth: '840px' }}>
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Button
          to="/admin/dashboard"
          variant="secondary"
          size="sm"
          icon={ArrowLeft}
          style={{ marginBottom: 'var(--space-3)' }}
        >
          Back to Dashboard
        </Button>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '2px' }}>
          {isEditing ? `Edit Scheme: ${formData.name}` : 'Create New Scheme Record'}
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
          All fields are stored in the local database and validated prior to publishing.
        </p>
      </div>

      <ErrorMessage message={error} onDismiss={() => setError(null)} />

      <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)' }}>
        {/* Basic Details */}
        <div className="form-group">
          <label className="form-label" htmlFor="sf-name">Scheme Full Name *</label>
          <input
            id="sf-name"
            type="text"
            name="name"
            required
            className="form-input"
            value={formData.name}
            onChange={handleSimpleChange}
            placeholder="e.g. Post-Matric Scholarship for SC Students"
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="sf-slug">Slug / Identifier</label>
            <input
              id="sf-slug"
              type="text"
              name="slug"
              className="form-input"
              value={formData.slug}
              onChange={handleSimpleChange}
              placeholder="auto-generated-if-empty"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="sf-ministry">Administering Ministry *</label>
            <input
              id="sf-ministry"
              type="text"
              name="ministryOrDepartment"
              required
              className="form-input"
              value={formData.ministryOrDepartment}
              onChange={handleSimpleChange}
              placeholder="e.g. Ministry of Education"
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="sf-type">Scheme Type *</label>
            <select
              id="sf-type"
              name="schemeType"
              value={formData.schemeType}
              onChange={handleSimpleChange}
              className="form-select"
            >
              <option value="Scholarship">Scholarship</option>
              <option value="Welfare Scheme">Welfare Scheme</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="sf-level">Jurisdiction *</label>
            <select
              id="sf-level"
              name="governmentLevel"
              value={formData.governmentLevel}
              onChange={handleSimpleChange}
              className="form-select"
            >
              <option value="Central Government">Central Government</option>
              <option value="State Government">State Government</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="sf-short-desc">Short Summary (for card listings) *</label>
          <textarea
            id="sf-short-desc"
            name="shortDescription"
            rows="2"
            required
            className="form-textarea"
            value={formData.shortDescription}
            onChange={handleSimpleChange}
            placeholder="1-2 sentences summarizing the benefit."
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="sf-desc">Full Detailed Description *</label>
          <textarea
            id="sf-desc"
            name="description"
            rows="4"
            required
            className="form-textarea"
            value={formData.description}
            onChange={handleSimpleChange}
            placeholder="Comprehensive description of objectives and guidelines."
          />
        </div>

        {/* URLs & Dates */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="sf-app-url">Official Application URL *</label>
            <input
              id="sf-app-url"
              type="url"
              name="officialApplicationUrl"
              required
              className="form-input"
              value={formData.officialApplicationUrl}
              onChange={handleSimpleChange}
              placeholder="https://scholarships.gov.in"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="sf-info-url">Official Information URL *</label>
            <input
              id="sf-info-url"
              type="url"
              name="officialInformationUrl"
              required
              className="form-input"
              value={formData.officialInformationUrl}
              onChange={handleSimpleChange}
              placeholder="https://department.gov.in"
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="sf-deadline">Application Deadline</label>
            <input
              id="sf-deadline"
              type="text"
              name="applicationDeadline"
              className="form-input"
              value={formData.applicationDeadline}
              onChange={handleSimpleChange}
              placeholder="e.g. October 31 (Annual Cycle)"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="sf-status">Publication Status</label>
            <select
              id="sf-status"
              name="status"
              value={formData.status}
              onChange={handleSimpleChange}
              className="form-select"
            >
              <option value="Active">Active / Open</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Benefits list */}
        <div style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          <label className="form-label">Verified Benefits List</label>
          {formData.benefits?.map((benefit, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
              <input
                type="text"
                className="form-input"
                value={benefit}
                onChange={(e) => handleUpdateArrayItem('benefits', idx, e.target.value)}
                placeholder="Benefit line item..."
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRemoveArrayItem('benefits', idx)}
                icon={Trash2}
                aria-label="Remove benefit"
              />
            </div>
          ))}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleAddArrayItem('benefits', 'New benefit')}
            icon={Plus}
          >
            Add Benefit
          </Button>
        </div>

        {/* Required Documents */}
        <div style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          <label className="form-label">Required Documents Checklist</label>
          {formData.requiredDocuments?.map((doc, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
              <input
                type="text"
                className="form-input"
                value={doc}
                onChange={(e) => handleUpdateArrayItem('requiredDocuments', idx, e.target.value)}
                placeholder="Document name..."
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRemoveArrayItem('requiredDocuments', idx)}
                icon={Trash2}
                aria-label="Remove document"
              />
            </div>
          ))}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleAddArrayItem('requiredDocuments', 'New document')}
            icon={Plus}
          >
            Add Document
          </Button>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: 'var(--space-6)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>
          <Button type="submit" variant="primary" loading={submitting} icon={Save}>
            {isEditing ? 'Save Changes' : 'Publish Scheme'}
          </Button>
          <Button to="/admin/dashboard" variant="secondary">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminSchemeForm;
