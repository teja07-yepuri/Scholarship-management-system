import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  User,
  LogOut,
  Sliders,
  ClipboardCheck,
  Sparkles,
  GraduationCap,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import PageContainer from './PageContainer';
import Button from '../common/Button';
import AcademicLogo from '../common/AcademicLogo';
import ApplicationTrackerModal from '../common/ApplicationTrackerModal';
import { useAuth } from '../../context/AuthContext';

/**
 * Navbar
 * Modern, responsive navigation bar with active route indicators,
 * accessible mobile navigation drawer, and real auth state handling.
 */
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trackerOpen, setTrackerOpen] = useState(false);
  const { admin, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="navbar modern-navbar">
        <PageContainer>
          <div className="nav-wrapper">
            {/* Brand Logo & Academic Identity */}
            <Link to="/" className="brand-logo-link" onClick={closeMenu} aria-label="Scholarship Management System Home">
              <AcademicLogo size="sm" showText={true} textColor="navy" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <ul className="nav-menu-list">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/scholarships"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    Browse Scholarships
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/eligibility-checker"
                    className={({ isActive }) => `nav-link nav-link-highlight ${isActive ? 'active' : ''}`}
                  >
                    <Sparkles size={14} className="nav-link-icon" />
                    Check Eligibility
                  </NavLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-link nav-btn-inline"
                    onClick={() => setTrackerOpen(true)}
                  >
                    <ClipboardCheck size={14} className="nav-link-icon" />
                    Track Application
                  </button>
                </li>
                <li>
                  <NavLink
                    to="/browse"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    All Schemes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Auth / Admin Action Portal */}
            <div className="nav-actions-desktop">
              {isAuthenticated ? (
                <div className="nav-admin-group">
                  <Button
                    to="/admin/dashboard"
                    variant="primary"
                    size="sm"
                    icon={Sliders}
                  >
                    Admin Dashboard
                  </Button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="nav-logout-btn"
                    title="Log out from coordinator portal"
                    aria-label="Logout"
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <Button
                  to="/admin/login"
                  variant="outline"
                  size="sm"
                  icon={User}
                >
                  Admin Portal
                </Button>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </PageContainer>

        {/* Mobile Navigation Drawer & Backdrop */}
        {mobileMenuOpen && (
          <div className="mobile-drawer-overlay" onClick={closeMenu}>
            <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-drawer-header">
                <AcademicLogo size="sm" showText={true} />
                <button
                  type="button"
                  className="mobile-drawer-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-nav-links">
                <NavLink
                  to="/"
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                  end
                >
                  <span>Home</span>
                  <ChevronRight size={16} />
                </NavLink>

                <NavLink
                  to="/scholarships"
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Browse Scholarships</span>
                  <ChevronRight size={16} />
                </NavLink>

                <NavLink
                  to="/eligibility-checker"
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="flex-center-gap">
                    <Sparkles size={16} className="text-primary" />
                    Check Eligibility
                  </span>
                  <ChevronRight size={16} />
                </NavLink>

                <button
                  type="button"
                  className="mobile-nav-item mobile-btn-link"
                  onClick={() => {
                    closeMenu();
                    setTrackerOpen(true);
                  }}
                >
                  <span className="flex-center-gap">
                    <ClipboardCheck size={16} />
                    Track Application
                  </span>
                  <ChevronRight size={16} />
                </button>

                <NavLink
                  to="/browse"
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>All Schemes</span>
                  <ChevronRight size={16} />
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>About Portal</span>
                  <ChevronRight size={16} />
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Helpdesk & Contact</span>
                  <ChevronRight size={16} />
                </NavLink>
              </div>

              <div className="mobile-drawer-footer">
                {isAuthenticated ? (
                  <div className="mobile-auth-actions">
                    <Button
                      to="/admin/dashboard"
                      variant="primary"
                      size="md"
                      icon={Sliders}
                      onClick={closeMenu}
                      className="full-width-btn"
                    >
                      Admin Dashboard
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      icon={LogOut}
                      onClick={handleLogout}
                      className="full-width-btn"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button
                    to="/admin/login"
                    variant="outline"
                    size="md"
                    icon={User}
                    onClick={closeMenu}
                    className="full-width-btn"
                  >
                    Coordinator / Admin Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Tracker Modal */}
      <ApplicationTrackerModal
        isOpen={trackerOpen}
        onClose={() => setTrackerOpen(false)}
      />
    </>
  );
};

export default Navbar;
