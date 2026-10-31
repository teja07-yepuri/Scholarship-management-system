import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ExternalLink,
  ShieldAlert,
  Heart,
  CheckCircle,
  Mail,
  HelpCircle,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Statutory Disclaimer */}
        <div className="disclaimer-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <ShieldAlert size={18} color="#f59e0b" />
            <strong style={{ color: '#f8fafc', fontSize: '0.9rem' }}>
              Independent Information Service & Legal Disclaimer
            </strong>
          </div>
          <p>
            National Scholarship and Government Schemes Finder is an independent academic and public
            welfare discovery tool developed to help Indian citizens find applicable schemes without
            navigating dozens of portals individually. This platform does not claim official government
            ownership, does not collect any application fees, and does not process official scheme
            approvals. All application links route directly to official government portals (such as
            National Scholarship Portal, PM-KISAN, e-Shram, NSAP). Always confirm instructions on the
            relevant official department portal.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1e3a8a, #0284c7)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GraduationCap size={20} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>SchemesFinder</h3>
            </div>
            <p style={{ color: 'var(--slate-400)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Empowering students, farmers, women entrepreneurs, and unorganized workers with
              rule-based matching for verified Indian welfare initiatives.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.85rem' }}>
              <CheckCircle size={16} /> Zero External API dependencies
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/browse">Browse All Schemes</Link></li>
              <li><Link to="/scholarships">National Scholarships</Link></li>
              <li><Link to="/government-schemes">Welfare Schemes</Link></li>
              <li><Link to="/eligibility-checker">Interactive Eligibility Checker</Link></li>
              <li><Link to="/about">About & Verification Policy</Link></li>
              <li><Link to="/contact">Citizen Support & FAQs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Key Categories</h4>
            <ul className="footer-links">
              <li><Link to="/category/students">School & College Students</Link></li>
              <li><Link to="/category/farmers">Farmers & Agriculture</Link></li>
              <li><Link to="/category/women">Women Empowerment</Link></li>
              <li><Link to="/category/daily-wage-workers">Daily Wage & Gig Workers</Link></li>
              <li><Link to="/category/small-business-owners">Small Business Owners</Link></li>
              <li><Link to="/category/senior-citizens">Senior Citizens</Link></li>
              <li><Link to="/category/persons-with-disabilities">Divyangjan (PWD)</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Official Portals</h4>
            <ul className="footer-links">
              <li>
                <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">
                  National Scholarship Portal <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">
                  PM-KISAN Samman Nidhi <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </li>
              <li>
                <a href="https://eshram.gov.in" target="_blank" rel="noopener noreferrer">
                  e-Shram Social Security <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </li>
              <li>
                <a href="https://pmsvanidhi.mohua.gov.in" target="_blank" rel="noopener noreferrer">
                  PM SVANidhi Portal <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </li>
              <li>
                <a href="https://nsap.nic.in" target="_blank" rel="noopener noreferrer">
                  NSAP National Pensions <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </li>
              <li>
                <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer">
                  National Portal of India <ExternalLink size={12} style={{ display: 'inline' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} National Scholarship and Government Schemes Finder. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/admin/login" style={{ color: 'var(--slate-500)' }}>Admin Gateway</Link>
            <Link to="/about" style={{ color: 'var(--slate-500)' }}>Privacy Guidelines</Link>
            <Link to="/contact" style={{ color: 'var(--slate-500)' }}>Grievance Helpdesk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
