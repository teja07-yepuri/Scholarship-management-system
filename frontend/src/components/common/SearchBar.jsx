import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import Button from './Button';

const SearchBar = ({
  initialQuery = '',
  onSearch,
  placeholder = 'Search scholarships, schemes, categories...',
  showQuickTags = true,
  className = '',
}) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/browse?search=${encodeURIComponent(query)}`);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    if (onSearch) onSearch('');
  };

  const handleTagClick = (tag) => {
    setSearchTerm(tag);
    if (onSearch) {
      onSearch(tag);
    } else {
      navigate(`/browse?search=${encodeURIComponent(tag)}`);
    }
  };

  return (
    <div className={`search-bar-wrap ${className}`.trim()}>
      <form onSubmit={handleSearchSubmit} className="search-bar-input-box">
        <Search size={18} color="var(--color-text-muted)" style={{ marginLeft: '4px' }} />
        <input
          type="text"
          className="search-bar-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search schemes"
        />
        {searchTerm && (
          <button
            type="button"
            className="search-bar-clear-btn"
            onClick={handleClear}
            title="Clear search input"
          >
            <X size={16} />
          </button>
        )}
        <Button type="submit" variant="primary" size="sm">
          Search
        </Button>
      </form>

      {showQuickTags && (
        <div className="search-quick-tags">
          <span>Popular:</span>
          {['Post-Matric', 'PM-KISAN', 'Mudra Loan', 'Girls Education', 'Street Vendors', 'Senior Pension'].map(
            (tag) => (
              <button
                key={tag}
                type="button"
                className="search-tag-btn"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
