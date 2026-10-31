import React, { useState } from 'react';
import { Sparkles, HelpCircle, Shield, CheckCircle2 } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="eligibility-form-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
        <Sparkles size={22} color="var(--accent-green)" />
        <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Enter Citizen Profile Details</h3>
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">State of Residence</label>
          <select
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
          <label className="form-label">Current Age (Years)</label>
          <input
            type="number"
            name="age"
            min="0"
            max="110"
            value={formData.age}
            onChange={handleChange}
            placeholder="e.g. 20"
            className="form-input"
            required
          />
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Primary Occupation</label>
          <select
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
          <label className="form-label">Social Category / Caste</label>
          <select
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

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Education Level</label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Any">Not Applicable / School Level</option>
            <option value="Class 9-10">Class 9 - 10</option>
            <option value="Class 11-12">Class 11 - 12 (Intermediate / Plus 2)</option>
            <option value="Undergraduate">Undergraduate Degree (BA, BSc, B.Tech, etc.)</option>
            <option value="Postgraduate">Postgraduate Degree (MA, MSc, M.Tech, etc.)</option>
            <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
            <option value="Doctorate">Doctorate / Ph.D.</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Annual Family Income (₹ INR / Year)</label>
          <input
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

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Gender</label>
          <select
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
          <label className="form-label">Persons with Disability (Divyangjan)?</label>
          <select
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
        <div className="form-group" style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
          <label className="form-label">Disability Percentage (as per UDID / Medical Certificate)</label>
          <input
            type="number"
            name="disabilityPercentage"
            min="0"
            max="100"
            value={formData.disabilityPercentage}
            onChange={handleChange}
            placeholder="e.g. 40"
            className="form-input"
          />
          <span className="form-help">Most government schemes require at least 40% benchmark disability.</span>
        </div>
      )}

      <div style={{ marginTop: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--slate-500)' }}>
        <Shield size={14} color="#059669" />
        <span>Privacy note: Your answers are evaluated in-session only and never stored or shared.</span>
      </div>

      <button type="submit" className="btn btn-accent btn-lg btn-block" disabled={loading}>
        {loading ? (
          'Evaluating Matching Schemes...'
        ) : (
          <>
            <Sparkles size={18} /> Check My Potentially Eligible Schemes
          </>
        )}
      </button>
    </form>
  );
};

export default EligibilityForm;
