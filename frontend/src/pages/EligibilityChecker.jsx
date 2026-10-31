import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import ErrorMessage from '../components/common/ErrorMessage';
import EligibilityForm from '../components/eligibility/EligibilityForm';
import EligibilityResults from '../components/eligibility/EligibilityResults';
import { evaluateEligibility } from '../services/api';

const EligibilityChecker = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEvaluate = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      const res = await evaluateEligibility(formData);
      if (res.success && res.data) {
        setResults(res.data);
        window.scrollTo({ top: 180, behavior: 'smooth' });
      } else {
        setError('Evaluation could not be performed. Please verify your entries.');
      }
    } catch (err) {
      setError('An error occurred while evaluating eligibility against database criteria.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="section">
      <PageContainer style={{ maxWidth: '880px' }}>
        <SectionHeader
          centered
          eyebrow="Rule-Based Evaluation"
          title="Interactive Eligibility Checker"
          subtitle="Provide your basic details to discover scholarships and welfare schemes you may qualify for based on published government criteria."
        />

        <ErrorMessage message={error} onDismiss={() => setError(null)} />

        {!results ? (
          <EligibilityForm onSubmit={handleEvaluate} loading={loading} />
        ) : (
          <EligibilityResults results={results} onReset={handleReset} />
        )}
      </PageContainer>
    </div>
  );
};

export default EligibilityChecker;
