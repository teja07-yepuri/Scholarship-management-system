import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Tag } from 'lucide-react';

/**
 * ScholarshipSearch
 * Interactive hero search input supporting keyword, qualification, caste, and quick filters.
 */
const ScholarshipSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/browse');
    }
  };

  const handleQuickTagClick = (tag) => {
    navigate(`/browse?search=${encodeURIComponent(tag)}`);
  };

  const quickTags = [
    'Post-Matric',
    'Merit-cum-Means',
    'Girls Education',
    'SC / ST',
    'OBC Scheme',
    'Undergraduate',
  ];

  return (
    <div className="scholarship-hero-search-wrapper">
      <form onSubmit={handleSearchSubmit} className="hero-search-form" role="search">
        <div className="hero-search-input-box">
          <Search size={18} className="hero-search-icon" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by scholarship name, caste, degree, or ministry..."
            className="hero-search-input"
            aria-label="Search scholarships"
          />
        </div>
        <button type="submit" className="hero-search-submit-btn">
          <span>Search</span>
          <ArrowRight size={15} />
        </button>
      </form>

      {/* Suggested Quick Filter Tags */}
      <div className="hero-quick-tags-row">
        <span className="quick-tags-label">Popular Filters:</span>
        <div className="quick-tags-list">
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleQuickTagClick(tag)}
              className="quick-tag-chip"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSearch;
