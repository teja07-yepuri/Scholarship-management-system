import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  FileText,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  PieChart,
  Sliders,
} from 'lucide-react';
import StatCard from '../common/StatCard';
import RecentApplications from './RecentApplications';
import ApplicationStatusBadge from '../common/ApplicationStatusBadge';
import SpotlightCard from '../reactbits/SpotlightCard';
import { fetchSchemes } from '../../services/api';

const defaultApps = [
  { id: 101, refNo: 'APP-2026-001', name: 'Mark Henry', scheme: 'Post-Matric Scholarship for SC/ST', status: 'Pending' },
  { id: 102, refNo: 'APP-2026-002', name: 'Samantha Fernando', scheme: 'Central Sector Scheme for College Students', status: 'Approved' },
  { id: 103, refNo: 'APP-2026-003', name: 'Albert De Silva', scheme: 'Pragati Scholarship for Girls', status: 'Pending' },
  { id: 104, refNo: 'APP-2026-004', name: 'Romesh Jayawardena', scheme: 'Ishan Uday Special Scheme for NER', status: 'Rejected' },
  { id: 105, refNo: 'APP-2026-005', name: 'Kalan Madhusanka', scheme: 'National Fellowship for ST Students', status: 'Approved' },
];

/**
 * DashboardPreview - Modern SaaS Dashboard Overview
 * Displays live stats, interactive status distribution chart, and recent application activity.
 */
const DashboardPreview = ({ onOpenTracker }) => {
  const navigate = useNavigate();
  const [totalSchemes, setTotalSchemes] = useState(12);
  const [applications, setApplications] = useState(() => {
    try {
      const saved = localStorage.getItem('coordinator_applications_data');
      return saved ? JSON.parse(saved) : defaultApps;
    } catch {
      return defaultApps;
    }
  });

  const [activeTab, setActiveTab] = useState('activity'); // 'activity' | 'distribution'

  useEffect(() => {
    // Load live schemes count from backend
    const loadStats = async () => {
      try {
        const res = await fetchSchemes({ limit: 100 });
        if (res.success && Array.isArray(res.data)) {
          setTotalSchemes(res.total || res.data.length);
        }
      } catch (e) {
        // Fallback to default
      }
    };

    loadStats();

    // Sync with localStorage changes
    const handleStorageChange = () => {
      try {
        const saved = localStorage.getItem('coordinator_applications_data');
        if (saved) setApplications(JSON.parse(saved));
      } catch {}
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const totalAppsCount = applications.length;
  const approvedCount = applications.filter((a) => (a.status || '').toLowerCase() === 'approved').length;
  const pendingCount = applications.filter((a) => (a.status || '').toLowerCase() === 'pending').length;
  const rejectedCount = applications.filter((a) => (a.status || '').toLowerCase() === 'rejected').length;

  const approvedPercent = totalAppsCount > 0 ? Math.round((approvedCount / totalAppsCount) * 100) : 60;
  const pendingPercent = totalAppsCount > 0 ? Math.round((pendingCount / totalAppsCount) * 100) : 25;
  const rejectedPercent = totalAppsCount > 0 ? Math.round((rejectedCount / totalAppsCount) * 100) : 15;

  return (
    <div className="dashboard-preview-card">
      {/* Top Header of the SaaS Console */}
      <div className="dashboard-preview-header">
        <div className="preview-header-left">
          <div className="live-pulse-dot" />
          <span className="preview-header-title">Live Portal Management Console</span>
          <span className="preview-badge-sync">Official Portal Sync</span>
        </div>
        <button
          type="button"
          onClick={() => navigate('/admin/dashboard')}
          className="preview-admin-btn"
          title="Open Administrative Coordinator Portal"
        >
          <Sliders size={13} />
          <span>Coordinator View</span>
        </button>
      </div>

      {/* 4 Core Metrics Grid */}
      <div className="preview-stats-grid">
        <StatCard
          label="Total Scholarships"
          value={totalSchemes}
          icon={GraduationCap}
          variant="blue"
          changeText="Actively Indexed"
          changePositive={true}
          onClick={() => navigate('/scholarships')}
        />

        <StatCard
          label="Total Applications"
          value={totalAppsCount}
          icon={FileText}
          variant="navy"
          changeText="Enrolled Candidates"
          changePositive={true}
        />

        <StatCard
          label="Approved Grants"
          value={approvedCount}
          icon={CheckCircle2}
          variant="green"
          changeText={`${approvedPercent}% Sanction Rate`}
          changePositive={true}
        />

        <StatCard
          label="Under Review"
          value={pendingCount}
          icon={Clock}
          variant="amber"
          changeText="Nodal Verification"
          changePositive={false}
        />
      </div>

      {/* Interactive Main Widget Panel */}
      <div className="preview-panel-container">
        {/* Panel Tabs */}
        <div className="preview-panel-tabs">
          <button
            type="button"
            className={`preview-tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <Clock size={14} />
            <span>Recent Activity ({applications.length})</span>
          </button>
          <button
            type="button"
            className={`preview-tab-btn ${activeTab === 'distribution' ? 'active' : ''}`}
            onClick={() => setActiveTab('distribution')}
          >
            <PieChart size={14} />
            <span>Status Distribution</span>
          </button>
        </div>

        {/* Panel Tab Content */}
        <div className="preview-tab-content">
          {activeTab === 'activity' ? (
            <RecentApplications
              applications={applications}
              maxItems={4}
              onSelectApplication={(app) => {
                if (onOpenTracker) onOpenTracker(app.refNo);
              }}
              onViewAll={() => navigate('/admin/dashboard')}
            />
          ) : (
            <div className="preview-chart-view">
              <div className="chart-donut-wrapper">
                <svg width="120" height="120" viewBox="0 0 100 100" className="preview-donut-svg">
                  {/* Background Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="transparent"
                    stroke="#F1F5F9"
                    strokeWidth="16"
                  />
                  {/* Approved slice */}
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="transparent"
                    stroke="#16A34A"
                    strokeWidth="16"
                    strokeDasharray={`${(approvedPercent * 226) / 100} 226`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  />
                  {/* Pending slice */}
                  <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="transparent"
                    stroke="#D97706"
                    strokeWidth="16"
                    strokeDasharray={`${(pendingPercent * 226) / 100} 226`}
                    strokeDashoffset={`-${(approvedPercent * 226) / 100}`}
                  />
                  {/* Center Metric */}
                  <text
                    x="50"
                    y="48"
                    textAnchor="middle"
                    className="donut-center-val"
                  >
                    {totalAppsCount}
                  </text>
                  <text
                    x="50"
                    y="60"
                    textAnchor="middle"
                    className="donut-center-sub"
                  >
                    Applications
                  </text>
                </svg>
              </div>

              {/* Progress Breakdown Bars */}
              <div className="chart-breakdown-list">
                <div className="chart-breakdown-row">
                  <div className="breakdown-label-row">
                    <span className="dot dot-green" />
                    <span className="breakdown-name">Approved ({approvedCount})</span>
                    <strong className="breakdown-percent">{approvedPercent}%</strong>
                  </div>
                  <div className="breakdown-progress-track">
                    <div
                      className="breakdown-progress-bar bar-green"
                      style={{ width: `${approvedPercent}%` }}
                    />
                  </div>
                </div>

                <div className="chart-breakdown-row">
                  <div className="breakdown-label-row">
                    <span className="dot dot-amber" />
                    <span className="breakdown-name">Under Review ({pendingCount})</span>
                    <strong className="breakdown-percent">{pendingPercent}%</strong>
                  </div>
                  <div className="breakdown-progress-track">
                    <div
                      className="breakdown-progress-bar bar-amber"
                      style={{ width: `${pendingPercent}%` }}
                    />
                  </div>
                </div>

                <div className="chart-breakdown-row">
                  <div className="breakdown-label-row">
                    <span className="dot dot-red" />
                    <span className="breakdown-name">Rejected ({rejectedCount})</span>
                    <strong className="breakdown-percent">{rejectedPercent}%</strong>
                  </div>
                  <div className="breakdown-progress-track">
                    <div
                      className="breakdown-progress-bar bar-red"
                      style={{ width: `${rejectedPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="preview-card-footer">
        <span className="footer-subtext">
          <ShieldCheck size={14} className="text-success" />
          Real-time synchronized data from National Scholarship Database
        </span>
        <button
          type="button"
          onClick={() => {
            if (onOpenTracker) onOpenTracker();
          }}
          className="footer-track-quick-link"
        >
          Check Application Status →
        </button>
      </div>
    </div>
  );
};

export default DashboardPreview;
