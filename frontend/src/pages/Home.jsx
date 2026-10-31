import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Award, BookOpen, Layers } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import HeroSection from '../components/home/HeroSection';
import ApplicationTrackerModal from '../components/common/ApplicationTrackerModal';
import StudentRegisterModal from '../components/common/StudentRegisterModal';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import CategoryCard from '../components/schemes/CategoryCard';
import SchemeGrid from '../components/schemes/SchemeGrid';
import FadeContent from '../components/reactbits/FadeContent';
import { fetchCategories, fetchSchemes } from '../services/api';

/**
 * Home Page
 * Redesigned educational SaaS homepage with React Bits animations,
 * live portal stats, accessible components, and preserved backend integration.
 */
const Home = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [featuredSchemes, setFeaturedSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modals for workflow steps
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [trackerInitialRef, setTrackerInitialRef] = useState('');

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const [catRes, schemeRes] = await Promise.all([
          fetchCategories(),
          fetchSchemes({ featured: 'true', limit: 6 }),
        ]);

        if (catRes.success) setCategories(catRes.data);
        if (schemeRes.success) setFeaturedSchemes(schemeRes.data);
      } catch (err) {
        console.error('Failed to load homepage data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  const handleOpenTracker = (refNo = '') => {
    setTrackerInitialRef(refNo);
    setIsTrackerOpen(true);
  };

  return (
    <div className="home-page-container">
      {/* Modern Educational SaaS Hero Section with React Bits */}
      <HeroSection
        onOpenRegistration={() => setIsRegisterOpen(true)}
        onOpenTracker={handleOpenTracker}
      />

      {/* Featured Scholarships & Welfare Programs Section */}
      <section className="section featured-schemes-section">
        <PageContainer>
          <SectionHeader
            eyebrow="Verified Database"
            title="Featured Scholarships & Welfare Programs"
            subtitle="Government schemes currently accepting student and citizen applications with direct official portal submission links."
            action={
              <Button to="/browse" variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
                View All Schemes
              </Button>
            }
          />

          <FadeContent duration={500} threshold={0.1}>
            <SchemeGrid schemes={featuredSchemes} loading={loading} />
          </FadeContent>
        </PageContainer>
      </section>

      {/* Browse by Beneficiary Category Section */}
      <section className="section categories-section">
        <PageContainer>
          <SectionHeader
            eyebrow="Target Beneficiaries"
            title="Browse by Beneficiary Category"
            subtitle="Explore initiatives structured for students, farmers, women, small businesses, and social communities."
            action={
              <Button to="/browse" variant="secondary" size="sm" icon={ArrowRight} iconPosition="right">
                All Categories
              </Button>
            }
          />

          <div className="categories-grid-layout">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Official Standards & Policy Trust Banner */}
      <section className="section trust-section">
        <PageContainer>
          <div className="trust-card modern-trust-card">
            <div className="trust-card-header">
              <div className="trust-icon-badge">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="trust-card-heading">
                  Official National Standards & Verification Policy
                </h3>
                <p className="trust-card-body">
                  The Scholarship Management System indexes accredited schemes from the National Scholarship Portal (NSP),
                  Ministry of Education, Ministry of Social Justice and Empowerment, UGC, and state education departments.
                  All submissions redirect exclusively to certified government portals (<code>.gov.in</code> and <code>.nic.in</code>).
                </p>
              </div>
            </div>

            <div className="trust-card-features">
              <span className="trust-feature-item">
                <CheckCircle2 size={16} className="text-success" />
                <span>100% Verified Ministry Portal Links</span>
              </span>
              <span className="trust-feature-item">
                <CheckCircle2 size={16} className="text-success" />
                <span>Zero Aadhaar / Banking Credential Harvesting</span>
              </span>
              <span className="trust-feature-item">
                <CheckCircle2 size={16} className="text-success" />
                <span>Rule-Based Qualification & Caste Matching</span>
              </span>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Modals for Tracking and Registration */}
      <ApplicationTrackerModal
        isOpen={isTrackerOpen}
        initialRef={trackerInitialRef}
        onClose={() => setIsTrackerOpen(false)}
      />

      <StudentRegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
};

export default Home;
