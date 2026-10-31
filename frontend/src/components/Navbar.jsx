import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  User,
  LogOut,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { admin, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <div className="gov-top-bar"></div>
      <div className="official-strip">
        <div className="container">
          <div className="official-badge-text">
            <ShieldCheck size={14} color="#10b981" />
            <span>Independent Public Citizen Welfare & Scholarship Discovery Portal</span>
          </div>
          <div className="official-strip-links">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={12} color="#60a5fa" /> 100% Verified Local Database
            </span>
            <Link to="/about">Verification Policy</Link>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-container">
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-icon">
              <GraduationCap size={24} />
            </div>
            <div className="brand-text">
              <h1>SchemesFinder</h1>
              <p>National Scholarships & Welfare</p>
            </div>
          </Link>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/browse"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Browse Schemes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/scholarships"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Scholarships
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/government-schemes"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Government Schemes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/eligibility-checker"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: '#047857', fontWeight: '700' }}
                >
                  <Sparkles size={16} color="#059669" />
                  Eligibility Checker
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>

              {/* Mobile-only auth action */}
              <li style={{ display: mobileMenuOpen ? 'block' : 'none', marginTop: '1rem' }}>
                {isAuthenticated ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link
                      to="/admin/dashboard"
                      className="btn btn-primary btn-sm btn-block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Sliders size={16} /> Admin Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="btn btn-secondary btn-sm btn-block"
                    >
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/admin/login"
                    className="btn btn-outline btn-sm btn-block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User size={16} /> Admin Portal
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            {isAuthenticated ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link to="/admin/dashboard" className="btn btn-primary btn-sm">
                  <Sliders size={15} /> Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary btn-sm"
                  title="Sign Out"
                >
                  <LogOut size={15} />
                </button>
              </div>
            ) : (
              <Link to="/admin/login" className="btn btn-outline btn-sm">
                <User size={15} /> Admin Login
              </Link>
            )}

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
