import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

const INDIAN_STATES = [
  'All India',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi NCR',
];

const SchemeFilters = ({ filters, onFilterChange, onReset, categories = [] }) => {
  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value, page: 1 });
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.schemeType !== 'all' ||
    filters.governmentLevel !== 'all' ||
    filters.state !== 'all' ||
    filters.educationLevel !== 'all' ||
    filters.search;

  return (
    <div className="filters-card">
      <div className="filters-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--slate-800)' }}>
          <Filter size={18} color="var(--primary)" />
          <span>Filter Schemes</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="btn btn-secondary btn-sm"
            style={{ fontSize: '0.775rem', padding: '0.25rem 0.6rem' }}
          >
            <RotateCcw size={12} /> Clear Filters
          </button>
        )}
      </div>

      <div className="filter-group">
        <label className="filter-label">Scheme Category</label>
        <select
          className="filter-select"
          value={filters.category || 'all'}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Scheme Type</label>
        <select
          className="filter-select"
          value={filters.schemeType || 'all'}
          onChange={(e) => handleChange('schemeType', e.target.value)}
        >
          <option value="all">All Types (Scholarships & Welfare)</option>
          <option value="Scholarship">Scholarship</option>
          <option value="Welfare Scheme">Welfare Scheme</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Government Jurisdiction</label>
        <select
          className="filter-select"
          value={filters.governmentLevel || 'all'}
          onChange={(e) => handleChange('governmentLevel', e.target.value)}
        >
          <option value="all">All Jurisdictions</option>
          <option value="Central Government">Central Government</option>
          <option value="State Government">State Government</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">State / Region</label>
        <select
          className="filter-select"
          value={filters.state || 'all'}
          onChange={(e) => handleChange('state', e.target.value)}
        >
          {INDIAN_STATES.map((st) => (
            <option key={st} value={st === 'All India' ? 'all' : st}>
              {st}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Education Level</label>
        <select
          className="filter-select"
          value={filters.educationLevel || 'all'}
          onChange={(e) => handleChange('educationLevel', e.target.value)}
        >
          <option value="all">Any Education Level</option>
          <option value="Class 9-10">Class 9 - 10 (Secondary)</option>
          <option value="Class 11-12">Class 11 - 12 (Higher Secondary)</option>
          <option value="Undergraduate">Undergraduate Degree (UG)</option>
          <option value="Postgraduate">Postgraduate Degree (PG)</option>
          <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
          <option value="Doctorate">Doctorate / Ph.D.</option>
        </select>
      </div>

      <div className="filter-group" style={{ marginBottom: 0 }}>
        <label className="filter-label">Sort By</label>
        <select
          className="filter-select"
          value={`${filters.sortBy || 'createdAt'}-${filters.order || 'desc'}`}
          onChange={(e) => {
            const [sortBy, order] = e.target.value.split('-');
            onFilterChange({ ...filters, sortBy, order, page: 1 });
          }}
        >
          <option value="createdAt-desc">Newly Added First</option>
          <option value="name-asc">Scheme Name (A - Z)</option>
          <option value="name-desc">Scheme Name (Z - A)</option>
        </select>
      </div>
    </div>
  );
};

export default SchemeFilters;
