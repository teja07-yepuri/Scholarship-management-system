import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import SchemeFilters from '../components/schemes/SchemeFilters';
import SchemeGrid from '../components/schemes/SchemeGrid';
import Button from '../components/common/Button';
import ErrorMessage from '../components/common/ErrorMessage';
import { fetchSchemes, fetchCategories } from '../services/api';

const BrowseSchemes = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [schemes, setSchemes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || 'all',
    schemeType: searchParams.get('schemeType') || 'all',
    governmentLevel: searchParams.get('governmentLevel') || 'all',
    state: searchParams.get('state') || 'all',
    educationLevel: searchParams.get('educationLevel') || 'all',
    status: searchParams.get('status') || '',
    sortBy: searchParams.get('sortBy') || 'createdAt',
    order: searchParams.get('order') || 'desc',
    page: parseInt(searchParams.get('page') || '1', 10),
    limit: 9,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      search: searchParams.get('search') || '',
      category: searchParams.get('category') || 'all',
      schemeType: searchParams.get('schemeType') || 'all',
      governmentLevel: searchParams.get('governmentLevel') || 'all',
      state: searchParams.get('state') || 'all',
      educationLevel: searchParams.get('educationLevel') || 'all',
      page: parseInt(searchParams.get('page') || '1', 10),
    }));
  }, [searchParams]);

  useEffect(() => {
    fetchCategories().then((res) => {
      if (res.success) setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    const loadSchemes = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchSchemes(filters);
        if (res.success) {
          setSchemes(res.data);
          setPagination(res.pagination);
        }
      } catch (err) {
        setError('Unable to load schemes catalog. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadSchemes();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v && v !== 'all' && k !== 'limit') {
        params.set(k, v);
      }
    });
    setSearchParams(params);
  };

  const handleReset = () => {
    const defaultFilters = {
      search: '',
      category: 'all',
      schemeType: 'all',
      governmentLevel: 'all',
      state: 'all',
      educationLevel: 'all',
      status: '',
      sortBy: 'createdAt',
      order: 'desc',
      page: 1,
      limit: 9,
    };
    setFilters(defaultFilters);
    setSearchParams({});
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      handleFilterChange({ ...filters, page: newPage });
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  return (
    <div className="section">
      <PageContainer>
        <SectionHeader
          eyebrow="Directory"
          title="Browse All Schemes & Scholarships"
          subtitle="Explore published central and state government programs filtered by your specific criteria."
        />

        <ErrorMessage message={error} onRetry={() => handleFilterChange(filters)} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)', alignItems: 'start' }}>
          {/* Sidebar Filters */}
          <div style={{ maxWidth: '280px', width: '100%' }}>
            <SchemeFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleReset}
              categories={categories}
            />
          </div>

          {/* Scheme Listings Panel */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            {/* Inline search bar & counter */}
            <div
              className="glass-panel"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-4)',
                padding: '0.75rem 1rem',
              }}
            >
              <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
                <Search size={16} color="var(--color-primary-blue)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Filter by keyword..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange({ ...filters, search: e.target.value, page: 1 })}
                  className="glass-input"
                  style={{ width: '100%', paddingLeft: '2.4rem' }}
                />
              </div>

              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
                Showing <strong>{schemes.length}</strong> of <strong>{pagination.total}</strong> results
              </div>
            </div>

            {/* Scheme Grid with empty & loading support (rendered only when no database error) */}
            {!error ? (
              <SchemeGrid
                schemes={schemes}
                loading={loading}
                emptyTitle="No schemes match the current filter selection"
                emptyDescription="Try clearing one or more filters or resetting to the default view."
                emptyAction={
                  <Button variant="primary" size="sm" onClick={handleReset} icon={RotateCcw}>
                    Reset All Filters
                  </Button>
                }
              />
            ) : (
              <div
                className="glass-panel"
                style={{
                  padding: '2.5rem',
                  textAlign: 'center',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <p style={{ color: 'var(--color-danger)', fontSize: '0.95rem', marginBottom: 'var(--space-3)' }}>
                  {error}
                </p>
                <Button variant="primary" size="sm" onClick={() => handleFilterChange(filters)} icon={RotateCcw}>
                  Retry Connection
                </Button>
              </div>
            )}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-8)',
                }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page <= 1}
                  icon={ChevronLeft}
                >
                  Previous
                </Button>

                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                  Page {pagination.page} of {pagination.totalPages}
                </span>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page >= pagination.totalPages}
                  icon={ChevronRight}
                  iconPosition="right"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default BrowseSchemes;
