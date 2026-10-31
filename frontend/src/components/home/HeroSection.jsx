import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import PageContainer from '../layout/PageContainer';
import AcademicLogo from '../common/AcademicLogo';
import BlurText from '../reactbits/BlurText';
import ShinyText from '../reactbits/ShinyText';
import HeroActions from './HeroActions';
import ScholarshipSearch from './ScholarshipSearch';
import DashboardPreview from './DashboardPreview';
import FeatureGrid from './FeatureGrid';
import FadeContent from '../reactbits/FadeContent';

/**
 * HeroSection
 * Modern, balanced educational SaaS hero section.
 * Left: Clean branding, eyebrow, animated heading, description, CTAs, and functional search.
 * Right: Live Dashboard preview with real metrics, SVG donut distribution, and recent applications.
 * Bottom: 5-Step Workflow feature grid with React Bits card interactions.
 */
const HeroSection = ({ onOpenRegistration, onOpenTracker }) => {
  return (
    <section className="modern-hero-section">
      {/* Background radial atmosphere */}
      <div className="hero-glow-ambience" aria-hidden="true" />

      <PageContainer>
        <div className="modern-hero-grid">
          {/* Left Column: Brand, Heading, CTAs, Search */}
          <div className="hero-content-col">
            {/* Eyebrow Label with ShinyText */}
            <div className="hero-eyebrow-pill">
              <span className="eyebrow-spark-dot" />
              <ShinyText
                text="National Academic Portal"
                speed={3.5}
                color="#2563EB"
                className="eyebrow-shiny-text"
              />
              <span className="eyebrow-separator">•</span>
              <span className="eyebrow-subtext">Scholarship Management System</span>
            </div>

            {/* Main Heading with React Bits BlurText */}
            <div className="hero-heading-wrapper">
              <BlurText
                text="Your Journey to Educational Opportunities Starts Here"
                delay={65}
                animateBy="words"
                direction="top"
                className="hero-main-heading"
              />
            </div>

            {/* Supporting Description */}
            <p className="hero-lead-description">
              Discover verified central and state scholarships, verify your eligibility with
              intelligent rule-based matching, and track your applications seamlessly through
              an official, transparent national management portal.
            </p>

            {/* Hero CTAs */}
            <HeroActions onOpenTracker={onOpenTracker} />

            {/* Search Input */}
            <ScholarshipSearch />
          </div>

          {/* Right Column: Live React SaaS Dashboard Overview */}
          <div className="hero-preview-col">
            <FadeContent blur={true} duration={700} delay={150}>
              <DashboardPreview onOpenTracker={onOpenTracker} />
            </FadeContent>
          </div>
        </div>

        {/* 5-Step Workflow Feature Grid Section */}
        <div className="hero-feature-grid-section">
          <div className="section-eyebrow-row">
            <span className="section-eyebrow-text">Core Application Capabilities</span>
            <div className="section-eyebrow-line" />
          </div>
          <FeatureGrid
            onOpenRegistration={onOpenRegistration}
            onOpenTracker={onOpenTracker}
          />
        </div>
      </PageContainer>
    </section>
  );
};

export default HeroSection;
