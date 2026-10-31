import React from 'react';
import SchemeCard from './SchemeCard';
import LoadingSpinner from '../common/LoadingSpinner';
import EmptyState from '../common/EmptyState';

const SchemeGrid = ({
  schemes = [],
  loading = false,
  emptyTitle = 'No schemes match your criteria',
  emptyDescription = 'Try broadening your search term or adjusting category filters.',
  emptyAction,
}) => {
  if (loading) {
    return <LoadingSpinner message="Loading verified schemes..." />;
  }

  if (!schemes || schemes.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        action={emptyAction}
      />
    );
  }

  return (
    <div className="scheme-grid">
      {schemes.map((scheme) => (
        <SchemeCard key={scheme._id || scheme.slug} scheme={scheme} />
      ))}
    </div>
  );
};

export default SchemeGrid;
