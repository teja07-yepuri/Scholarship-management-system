import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';
import Button from '../common/Button';

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
    Boolean(filters.search);

  return (
    <aside className="filter-box" aria-label="Scheme filter options">
      <div className="filter-header">
        <div className="filter-title">
          <Filter size={16} />
          <span>Filters</span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            icon={RotateCcw}
            style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}
          >
            Reset
          </Button>
        )}
      </div>

      {/* Category */}
      <div className="form-group">
        <label className="form-label" htmlFor="filter-category">Category</label>
        <select
          id="filter-category"
          className="form-select"
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

      {/* Scheme Type */}
      <div className="form-group">
        <label className="form-label" htmlFor="filter-type">Scheme Type</label>
        <select
          id="filter-type"
          className="form-select"
          value={filters.schemeType || 'all'}
          onChange={(e) => handleChange('schemeType', e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="Scholarship">Scholarships</option>
          <option value="Welfare Scheme">Welfare Schemes</option>
        </select>
      </div>

      {/* Jurisdiction */}
      <div className="form-group">
        <label className="form-label" htmlFor="filter-level">Jurisdiction</label>
        <select
          id="filter-level"
          className="form-select"
          value={filters.governmentLevel || 'all'}
          onChange={(e) => handleChange('governmentLevel', e.target.value)}
        >
          <option value="all">All Levels</option>
          <option value="Central Government">Central Government</option>
          <option value="State Government">State Government</option>
        </select>
      </div>

      {/* State / Region */}
      <div className="form-group">
        <label className="form-label" htmlFor="filter-state">State / Region</label>
        <select
          id="filter-state"
          className="form-select"
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

      {/* Education Level */}
      <div className="form-group">
        <label className="form-label" htmlFor="filter-edu">Education Level</label>
        <select
          id="filter-edu"
          className="form-select"
          value={filters.educationLevel || 'all'}
          onChange={(e) => handleChange('educationLevel', e.target.value)}
        >
          <option value="all">Any Education Level</option>
          <option value="Class 9-10">Class 9 - 10</option>
          <option value="Class 11-12">Class 11 - 12</option>
          <option value="Undergraduate">Undergraduate (UG)</option>
          <option value="Postgraduate">Postgraduate (PG)</option>
          <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
          <option value="Doctorate">Doctorate / Ph.D.</option>
        </select>
      </div>

      {/* Sort By */}
      <div className="form-group" style={{ marginBottom: 0 }}>
        <label className="form-label" htmlFor="filter-sort">Sort Order</label>
        <select
          id="filter-sort"
          className="form-select"
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
    </aside>
  );
};

export default SchemeFilters;
