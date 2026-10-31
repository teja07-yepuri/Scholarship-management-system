import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';

const SearchBar = ({ initialQuery = '', onSearch, placeholder = 'Search by scheme name, keywords, student category, farmer...' }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      navigate(`/browse?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleQuickTagClick = (tag) => {
    setSearchTerm(tag);
    if (onSearch) {
      onSearch(tag);
    } else {
      navigate(`/browse?search=${encodeURIComponent(tag)}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="hero-search-wrap">
        <Search size={22} color="var(--primary)" />
        <input
          type="text"
          className="hero-search-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              if (onSearch) onSearch('');
            }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            title="Clear search"
          >
            <X size={18} color="var(--slate-400)" />
          </button>
        )}
        <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
          <span>Search</span>
          <ArrowRight size={16} />
        </button>
      </form>

      <div className="quick-tags">
        <span>Popular Searches:</span>
        {['Post-Matric', 'PM-KISAN', 'Mudra Loan', 'Girls Scholarship', 'Street Vendors', 'Senior Pension'].map(
          (tag) => (
            <button
              key={tag}
              type="button"
              className="quick-tag-chip"
              onClick={() => handleQuickTagClick(tag)}
            >
              {tag}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBar;
