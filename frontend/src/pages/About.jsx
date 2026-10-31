import React from 'react';
import { Database, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';

const About = () => {
  return (
    <div className="section">
      <PageContainer style={{ maxWidth: '860px' }}>
        <SectionHeader
          eyebrow="Transparency & Methodology"
          title="About SchemesFinder"
          subtitle="An independent public service platform built to simplify discovery of Indian scholarships and citizen welfare initiatives."
        />

        <div className="glass-panel" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-3)' }}>Our Objective</h3>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 'var(--space-4)' }}>
            Information about central and state government assistance is often dispersed across dozens of department portals,
            making it challenging for eligible students, rural farmers, and unorganized workers to learn about the benefits they qualify for.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
            SchemesFinder provides a structured directory with an in-browser eligibility evaluation engine, allowing users to
            quickly determine whether they meet income, age, and academic prerequisites before accessing official departmental application portals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
          <div className="glass-card" style={{ borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>
              <Database size={18} />
              <strong style={{ fontSize: '0.9375rem' }}>Local Verified Database</strong>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              All records are stored locally with zero third-party API dependencies. Every scheme includes verified official URLs and dates.
            </p>
          </div>

          <div className="glass-card" style={{ borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-success)', marginBottom: 'var(--space-2)' }}>
              <Lock size={18} />
              <strong style={{ fontSize: '0.9375rem' }}>Privacy & Data Integrity</strong>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              No Aadhaar numbers, phone OTPs, or passwords are requested. Eligibility assessments run in-memory and are never permanently stored.
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', marginBottom: 'var(--space-8)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-2)' }}>
            <ShieldCheck size={18} color="var(--color-warning)" />
            <strong style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>Official Disclaimer</strong>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            SchemesFinder is an independent academic and civic utility. It is not affiliated with, authorized, or operated by the
            Government of India or any state administration. All application submissions and grant disbursements occur directly on
            accredited government domains (.gov.in / .nic.in).
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button to="/browse" variant="primary" icon={ArrowRight} iconPosition="right">
            Browse Scheme Directory
          </Button>
        </div>
      </PageContainer>
    </div>
  );
};

export default About;
