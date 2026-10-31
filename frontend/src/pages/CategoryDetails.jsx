import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import SchemeGrid from '../components/schemes/SchemeGrid';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { fetchCategoryBySlug, fetchSchemes } from '../services/api';

const CategoryDetails = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategoryData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [catRes, schemesRes] = await Promise.all([
          fetchCategoryBySlug(slug),
          fetchSchemes({ category: slug, limit: 30 }),
        ]);

        if (catRes.success && catRes.data) {
          setCategory(catRes.data);
        } else {
          setError('Category record was not found in the database.');
        }

        if (schemesRes.success) {
          setSchemes(schemesRes.data);
        }
      } catch (err) {
        setError('Error retrieving schemes for this category.');
      } finally {
        setLoading(false);
      }
    };

    loadCategoryData();
  }, [slug]);

  if (loading) {
    return (
      <div className="section">
        <PageContainer>
          <LoadingSpinner message="Loading category..." />
        </PageContainer>
      </div>
    );
  }

  if (error || !category) {
    return (
      <div className="section">
        <PageContainer>
          <ErrorMessage message={error || 'Category not found.'} />
          <Button to="/browse" variant="secondary" icon={ChevronLeft}>
            Browse All Schemes
          </Button>
        </PageContainer>
      </div>
    );
  }

  return (
    <div className="section">
      <PageContainer>
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <Button to="/browse" variant="secondary" size="sm" icon={ChevronLeft}>
            Back to Directory
          </Button>
        </div>

        <SectionHeader
          eyebrow="Target Beneficiary Sector"
          title={category.name}
          subtitle={category.description}
          action={
            <Button to="/eligibility-checker" variant="outline" size="sm">
              Check Eligibility
            </Button>
          }
        />

        <SchemeGrid
          schemes={schemes}
          loading={false}
          emptyTitle={`No schemes currently published under ${category.name}`}
          emptyDescription="Check back soon as new central and state notifications are uploaded."
        />
      </PageContainer>
    </div>
  );
};

export default CategoryDetails;
