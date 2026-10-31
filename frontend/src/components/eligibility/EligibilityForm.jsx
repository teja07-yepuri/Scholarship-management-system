import React, { useState } from 'react';
import { Sparkles, Shield } from 'lucide-react';
import Button from '../common/Button';

const STATES = [
  'All India',
  'Andhra Pradesh',
  'Assam',
  'Bihar',
  'Delhi NCR',
  'Gujarat',
  'Haryana',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Tamil Nadu',
  'Telangana',
  'Uttar Pradesh',
  'West Bengal',
];

const EligibilityForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    state: 'All India',
    educationLevel: 'Undergraduate',
    currentCourse: '',
    annualFamilyIncome: '',
    age: '20',
    category: 'All',
    gender: 'All',
    occupation: 'Student',
    hasDisability: 'false',
    disabilityPercentage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="eligibility-card" aria-label="Citizen eligibility assessment form">
      <div style={{ marginBottom: 'var(--space-6)', borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-3)' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Citizen Profile Details</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Enter the parameters below to evaluate rule matching against verified central and state welfare criteria.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="el-state">State of Residence *</label>
          <select
            id="el-state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-select"
            required
          >
            {STATES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="el-age">Current Age (Years) *</label>
          <input
            id="el-age"
            type="number"
            name="age"
            min="0"
            max="120"
            value={formData.age}
            onChange={handleChange}
            placeholder="e.g. 20"
            className="form-input"
            required
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="el-occupation">Primary Occupation *</label>
          <select
            id="el-occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="Student">Student</option>
            <option value="Farmer">Farmer / Agriculture</option>
            <option value="Small Business">Small Business Owner / Trader / Vendor</option>
            <option value="Daily Wage">Daily Wage / Construction / Informal Worker</option>
            <option value="Self-employed">Self-Employed / Artisan</option>
            <option value="Unemployed">Unemployed / Job Seeker</option>
            <option value="Any">Homemaker / Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="el-category">Social Category / Caste *</label>
          <select
            id="el-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="All">General / Open Category</option>
            <option value="SC">Scheduled Caste (SC)</option>
            <option value="ST">Scheduled Tribe (ST)</option>
            <option value="OBC">Other Backward Classes (OBC)</option>
            <option value="EWS">Economically Weaker Section (EWS)</option>
            <option value="Minority">Religious Minority (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="el-edu">Current Education Level</label>
          <select
            id="el-edu"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Any">Not Applicable / School</option>
            <option value="Class 9-10">Class 9 - 10</option>
            <option value="Class 11-12">Class 11 - 12 (Higher Secondary)</option>
            <option value="Undergraduate">Undergraduate Degree (UG)</option>
            <option value="Postgraduate">Postgraduate Degree (PG)</option>
            <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
            <option value="Doctorate">Doctorate / Ph.D.</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="el-income">Annual Family Income (₹ INR / Year)</label>
          <input
            id="el-income"
            type="number"
            name="annualFamilyIncome"
            value={formData.annualFamilyIncome}
            onChange={handleChange}
            placeholder="e.g. 180000"
            className="form-input"
          />
          <span className="form-help">Leave empty if not sure or no ceiling applies.</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="el-gender">Gender</label>
          <select
            id="el-gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-select"
          >
            <option value="All">All Genders</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Transgender">Transgender</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="el-disability">Persons with Disability (Divyangjan)?</label>
          <select
            id="el-disability"
            name="hasDisability"
            value={formData.hasDisability}
            onChange={handleChange}
            className="form-select"
          >
            <option value="false">No</option>
            <option value="true">Yes (Benchmark Disability)</option>
          </select>
        </div>
      </div>

      {formData.hasDisability === 'true' && (
        <div className="form-group" style={{ backgroundColor: 'var(--color-surface-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
          <label className="form-label" htmlFor="el-disability-pct">
            Disability Percentage (as certified in UDID card)
          </label>
          <input
            id="el-disability-pct"
            type="number"
            name="disabilityPercentage"
            min="0"
            max="100"
            value={formData.disabilityPercentage}
            onChange={handleChange}
            placeholder="e.g. 40"
            className="form-input"
          />
          <span className="form-help">Most government welfare quotas require at least 40% benchmark disability.</span>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
        <Shield size={14} color="var(--color-success)" style={{ flexShrink: 0 }} />
        <span>Privacy: Answers are processed in-session only and never stored or shared.</span>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isBlock
        loading={loading}
        icon={Sparkles}
      >
        Check Potentially Eligible Schemes
      </Button>
    </form>
  );
};

export default EligibilityForm;
