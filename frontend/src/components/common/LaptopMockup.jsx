import React, { useState } from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  FileText,
  Award,
  User,
  LogOut,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
} from 'lucide-react';

const mockRecentApplications = [
  { id: 1, name: 'Mark Henry', scheme: 'Post-Matric Scholarship', status: 'Pending' },
  { id: 2, name: 'Samantha Fernando', scheme: 'Central Sector Scheme', status: 'Approved' },
  { id: 3, name: 'Albert De Silva', scheme: 'Pragati Scholarship for Girls', status: 'Pending' },
  { id: 4, name: 'Romesh Jayawardena', scheme: 'Ishan Uday Special Scheme', status: 'Rejected' },
  { id: 5, name: 'Kalan Madhusanka', scheme: 'National Fellowship for OBC', status: 'Approved' },
];

const LaptopMockup = ({ interactive = true, onNavigateDashboard }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [applications, setApplications] = useState(mockRecentApplications);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return (
          <span className="laptop-status-badge badge-approved">
            <span className="dot dot-green" /> Approved
          </span>
        );
      case 'Rejected':
        return (
          <span className="laptop-status-badge badge-rejected">
            <span className="dot dot-red" /> Rejected
          </span>
        );
      case 'Pending':
      default:
        return (
          <span className="laptop-status-badge badge-pending">
            <span className="dot dot-yellow" /> Pending
          </span>
        );
    }
  };

  return (
    <div className="laptop-showcase-container">
      {/* Laptop Frame */}
      <div className="laptop-mockup-frame">
        {/* Top Screen Lid Bezel */}
        <div className="laptop-bezel">
          <div className="laptop-camera-dot" />

          {/* Screen Content */}
          <div className="laptop-screen">
            {/* Screen Top Header Bar */}
            <div className="laptop-screen-header">
              <div className="laptop-screen-brand">
                <GraduationCap size={15} color="#93c5fd" />
                <span>Scholarship Management System</span>
              </div>
              <div className="laptop-screen-user">
                <span className="laptop-user-name">Admin Portal</span>
                <div className="laptop-user-avatar">
                  <User size={13} />
                </div>
              </div>
            </div>

            {/* Screen Layout: Sidebar + Main Content */}
            <div className="laptop-screen-body">
              {/* Dark Sidebar */}
              <aside className="laptop-sidebar">
                <div className="laptop-nav-item active">
                  <LayoutDashboard size={13} />
                  <span>Dashboard</span>
                </div>
                <div className="laptop-nav-item">
                  <GraduationCap size={13} />
                  <span>Scholarships</span>
                </div>
                <div className="laptop-nav-item">
                  <FileText size={13} />
                  <span>Applications</span>
                </div>
                <div className="laptop-nav-item">
                  <Award size={13} />
                  <span>Awarded Scholarships</span>
                </div>
                <div className="laptop-nav-item">
                  <User size={13} />
                  <span>Profile</span>
                </div>
                <div className="laptop-nav-item laptop-nav-logout">
                  <LogOut size={13} />
                  <span>Logout</span>
                </div>
              </aside>

              {/* Main Content Area */}
              <main className="laptop-main-content">
                <div className="laptop-content-title-row">
                  <h3 className="laptop-content-title">Dashboard</h3>
                  <span className="laptop-verified-tag">✓ Official Portal Sync</span>
                </div>

                {/* 4 Metric Cards */}
                <div className="laptop-stats-grid">
                  {/* Total Scholarships */}
                  <div className="laptop-stat-card">
                    <div className="laptop-stat-info">
                      <span className="laptop-stat-label">Total Scholarships</span>
                      <strong className="laptop-stat-num">12</strong>
                    </div>
                    <div className="laptop-stat-icon-circle icon-blue">
                      <GraduationCap size={16} />
                    </div>
                  </div>

                  {/* Total Applications */}
                  <div className="laptop-stat-card">
                    <div className="laptop-stat-info">
                      <span className="laptop-stat-label">Total Applications</span>
                      <strong className="laptop-stat-num">28</strong>
                    </div>
                    <div className="laptop-stat-icon-circle icon-teal">
                      <FileText size={16} />
                    </div>
                  </div>

                  {/* Approved */}
                  <div className="laptop-stat-card">
                    <div className="laptop-stat-info">
                      <span className="laptop-stat-label">Approved</span>
                      <strong className="laptop-stat-num" style={{ color: '#16a34a' }}>18</strong>
                    </div>
                    <div className="laptop-stat-icon-circle icon-green">
                      <CheckCircle size={16} />
                    </div>
                  </div>

                  {/* Rejected */}
                  <div className="laptop-stat-card">
                    <div className="laptop-stat-info">
                      <span className="laptop-stat-label">Rejected</span>
                      <strong className="laptop-stat-num" style={{ color: '#dc2626' }}>6</strong>
                    </div>
                    <div className="laptop-stat-icon-circle icon-red">
                      <XCircle size={16} />
                    </div>
                  </div>
                </div>

                {/* Split Bottom Section */}
                <div className="laptop-panels-split">
                  {/* Left: Recent Applications */}
                  <div className="laptop-panel-card">
                    <div className="laptop-panel-header">
                      <span>Recent Applications</span>
                    </div>
                    <table className="laptop-mini-table">
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id}>
                            <td className="col-name">{app.name}</td>
                            <td className="col-status">{getStatusBadge(app.status)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="laptop-panel-footer">
                      <button
                        type="button"
                        onClick={onNavigateDashboard}
                        className="laptop-view-all-link"
                      >
                        View All Applications →
                      </button>
                    </div>
                  </div>

                  {/* Right: Scholarship Overview Donut Chart */}
                  <div className="laptop-panel-card">
                    <div className="laptop-panel-header">
                      <span>Scholarship Overview</span>
                    </div>
                    <div className="laptop-chart-wrap">
                      {/* SVG Pie/Donut Chart */}
                      <svg width="105" height="105" viewBox="0 0 100 100" className="laptop-pie-chart">
                        {/* Green slice: Approved (18 / 28 = ~64%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#10b981"
                          strokeWidth="24"
                          strokeDasharray="140.7 220"
                          strokeDashoffset="0"
                        />
                        {/* Amber slice: Pending (6 / 28 = ~21%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#f59e0b"
                          strokeWidth="24"
                          strokeDasharray="47.1 220"
                          strokeDashoffset="-140.7"
                        />
                        {/* Red slice: Rejected (4 / 28 = ~14%) */}
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="transparent"
                          stroke="#ef4444"
                          strokeWidth="24"
                          strokeDasharray="32.2 220"
                          strokeDashoffset="-187.8"
                        />
                        {/* Inner Hole for Donut effect */}
                        <circle cx="50" cy="50" r="23" fill="#ffffff" />
                        <text
                          x="50"
                          y="48"
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="700"
                          fill="#1e293b"
                        >
                          28
                        </text>
                        <text
                          x="50"
                          y="58"
                          textAnchor="middle"
                          fontSize="5.5"
                          fill="#64748b"
                        >
                          Total
                        </text>
                      </svg>

                      {/* Chart Legend */}
                      <div className="laptop-chart-legend">
                        <div className="legend-item">
                          <span className="legend-dot dot-approved" />
                          <span className="legend-label">Approved (18)</span>
                        </div>
                        <div className="legend-item">
                          <span className="legend-dot dot-pending" />
                          <span className="legend-label">Pending (6)</span>
                        </div>
                        <div className="legend-item">
                          <span className="legend-dot dot-rejected" />
                          <span className="legend-label">Rejected (4)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Base / Hinge Chassis */}
        <div className="laptop-base-top">
          <div className="laptop-notch" />
        </div>
        <div className="laptop-base-bottom" />
      </div>
    </div>
  );
};

export default LaptopMockup;
