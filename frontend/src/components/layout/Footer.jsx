import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldAlert, CheckCircle2 } from 'lucide-react';
import PageContainer from './PageContainer';
import AcademicLogo from '../common/AcademicLogo';

const Footer = () => {
  return (
    <footer className="footer formal-footer">
      <PageContainer>
        {/* Independent Service Disclaimer */}
        <div className="formal-footer-disclaimer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <ShieldAlert size={16} color="var(--color-primary-navy)" />
            <strong style={{ fontSize: '0.875rem', color: 'var(--color-primary-navy)' }}>
              Official Standards Notice & Independent Discovery Guarantee
            </strong>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            The Scholarship Management System operates as a structured discovery service to assist students,
            research scholars, and citizens in finding verified central and state welfare initiatives. All applications
            are submitted directly on official government department servers (such as <code>scholarships.gov.in</code>,{' '}
            <code>pmkisan.gov.in</code>, <code>eshram.gov.in</code>). Final eligibility determination, document approval,
            and DBT benefit disbursement are governed exclusively by the designated statutory authorities.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <AcademicLogo size="sm" showText={true} />
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '300px' }}>
              A web-based system to streamline scholarship applications and welfare management for students and coordinators.
            </p>
          </div>

          <div>
            <div className="footer-heading">Navigation</div>
            <ul className="footer-nav-list">
              <li><Link to="/" className="footer-nav-link">Portal Home</Link></li>
              <li><Link to="/scholarships" className="footer-nav-link">National Scholarships</Link></li>
              <li><Link to="/government-schemes" className="footer-nav-link">Government Schemes</Link></li>
              <li><Link to="/browse" className="footer-nav-link">Browse Full Catalog</Link></li>
              <li><Link to="/eligibility-checker" className="footer-nav-link">Eligibility Checker</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Beneficiary Groups</div>
            <ul className="footer-nav-list">
              <li><Link to="/category/students" className="footer-nav-link">Students & Scholars</Link></li>
              <li><Link to="/category/farmers" className="footer-nav-link">Farmers & Agri-Workers</Link></li>
              <li><Link to="/category/women" className="footer-nav-link">Women & Girls</Link></li>
              <li><Link to="/category/daily-wage-workers" className="footer-nav-link">Daily Wage Workers</Link></li>
              <li><Link to="/category/small-business-owners" className="footer-nav-link">Small Business / MSME</Link></li>
              <li><Link to="/category/senior-citizens" className="footer-nav-link">Senior Citizens & Widows</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Official Portals</div>
            <ul className="footer-nav-list">
              <li>
                <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="footer-nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  National Scholarship Portal <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="footer-nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  PM-KISAN Portal <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://eshram.gov.in" target="_blank" rel="noopener noreferrer" className="footer-nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  e-Shram Portal <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://nsap.nic.in" target="_blank" rel="noopener noreferrer" className="footer-nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  NSAP Social Pensions <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} Scholarship Management System. All official trademarks belong to their respective statutory ministries.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/about" className="footer-nav-link">About Portal</Link>
            <Link to="/contact" className="footer-nav-link">Helpdesk</Link>
            <Link to="/admin/login" className="footer-nav-link">Coordinator Login</Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
