import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  FileText,
  Award,
  User,
  LogOut,
  Globe,
  PlusCircle,
} from 'lucide-react';
import AcademicLogo from '../common/AcademicLogo';
import { useAuth } from '../../context/AuthContext';

const AdminSidebar = ({ activeTab = 'dashboard', setActiveTab }) => {
  const { logout, admin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="admin-formal-sidebar" aria-label="Admin navigation sidebar">
      {/* Brand Header */}
      <div className="admin-sidebar-brand-box">
        <AcademicLogo size="sm" showText={false} light={true} />
        <div style={{ lineHeight: 1.15 }}>
          <div style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Scholarship
          </div>
          <div style={{ color: '#93c5fd', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Coordinator Portal
          </div>
        </div>
      </div>

      {/* User Info Bar */}
      <div className="admin-sidebar-user-pill">
        <div className="admin-user-avatar-dot">
          <User size={13} color="#ffffff" />
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ color: '#f8fafc', fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {admin?.username || 'Coordinator'}
          </div>
          <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>
            System Administrator
          </div>
        </div>
      </div>

      {/* Navigation matching the image laptop sidebar */}
      <nav className="admin-sidebar-nav">
        <button
          type="button"
          onClick={() => setActiveTab && setActiveTab('dashboard')}
          className={`admin-formal-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
        >
          <LayoutDashboard size={17} />
          <span>Dashboard</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab && setActiveTab('scholarships')}
          className={`admin-formal-nav-item ${activeTab === 'scholarships' ? 'active' : ''}`}
        >
          <GraduationCap size={17} />
          <span>Scholarships</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab && setActiveTab('applications')}
          className={`admin-formal-nav-item ${activeTab === 'applications' ? 'active' : ''}`}
        >
          <FileText size={17} />
          <span>Applications</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab && setActiveTab('awarded')}
          className={`admin-formal-nav-item ${activeTab === 'awarded' ? 'active' : ''}`}
        >
          <Award size={17} />
          <span>Awarded Scholarships</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab && setActiveTab('profile')}
          className={`admin-formal-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        >
          <User size={17} />
          <span>Profile</span>
        </button>

        <Link to="/admin/schemes/new" className="admin-formal-nav-item add-scheme-btn">
          <PlusCircle size={17} />
          <span>Add New Scheme</span>
        </Link>
      </nav>

      {/* Sidebar Footer */}
      <div className="admin-sidebar-footer">
        <Link to="/browse" className="admin-formal-nav-item" target="_blank" rel="noopener noreferrer">
          <Globe size={16} />
          <span>Public Portal</span>
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="admin-formal-nav-item logout-item"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
