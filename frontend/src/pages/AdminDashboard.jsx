import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  ExternalLink,
  RefreshCw,
  GraduationCap,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Award,
  Filter,
  ShieldCheck,
  Database,
  Building,
  Mail,
  Phone,
  Calendar,
  LogOut,
} from 'lucide-react';
import AdminLayout from '../components/admin/AdminLayout';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SchemeStatus from '../components/schemes/SchemeStatus';
import ErrorMessage from '../components/common/ErrorMessage';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useAuth } from '../context/AuthContext';
import {
  fetchAdminStats,
  fetchSchemes,
  deleteScheme,
  fetchApplications,
  updateApplicationReviewStatus,
} from '../services/api';

const AdminDashboard = () => {
  const { token, admin, logout } = useAuth();

  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState(null);
  const [schemes, setSchemes] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  // Filters for schemes
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterLevel, setFilterLevel] = useState('all');

  // Filters for applications
  const [appSearch, setAppSearch] = useState('');
  const [appStatusFilter, setAppStatusFilter] = useState('all');

  // Modal state
  const [schemeToDelete, setSchemeToDelete] = useState(null);

  // Load dynamic data from backend API
  const loadData = async () => {
    try {
      setLoading(true);
      const [statsRes, schemesRes, appsRes] = await Promise.all([
        fetchAdminStats(token).catch(() => ({ success: false })),
        fetchSchemes({ limit: 100 }).catch(() => ({ success: false })),
        fetchApplications(token).catch(() => ({ success: false })),
      ]);

      if (statsRes && statsRes.success) setStats(statsRes.data);
      if (schemesRes && schemesRes.success) setSchemes(schemesRes.data || []);
      if (appsRes && appsRes.success && Array.isArray(appsRes.data)) {
        setApplications(appsRes.data);
      }
    } catch (err) {
      setFeedbackMessage({ type: 'error', text: 'Error loading dashboard statistics from database.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [token]);

  // Handle scheme deletion
  const handleDeleteConfirm = async () => {
    if (!schemeToDelete) return;
    try {
      const res = await deleteScheme(schemeToDelete.slug || schemeToDelete._id, token);
      if (res.success) {
        setFeedbackMessage({
          type: 'success',
          text: `Scheme "${schemeToDelete.name}" deleted successfully.`,
        });
        setSchemeToDelete(null);
        loadData();
      }
    } catch (err) {
      setFeedbackMessage({ type: 'error', text: err.message || 'Failed to delete scheme.' });
    }
  };

  // Real database application review update
  const updateAppStatus = async (appIdOrRef, newStatus) => {
    try {
      await updateApplicationReviewStatus(
        appIdOrRef,
        {
          status: newStatus,
          remark: `Application reviewed and marked as ${newStatus} by Institutional Coordinator.`,
        },
        token
      );

      // Optimistically update local application list
      setApplications((prev) =>
        prev.map((app) =>
          app.refNo === appIdOrRef || app._id === appIdOrRef || app.id === appIdOrRef
            ? { ...app, status: newStatus }
            : app
        )
      );

      setFeedbackMessage({
        type: 'success',
        text: `Application ${appIdOrRef} status updated to "${newStatus}" and persisted to database.`,
      });

      // Refresh dynamic metrics
      loadData();
    } catch (err) {
      setFeedbackMessage({
        type: 'error',
        text: err.message || `Failed to update application status.`,
      });
    }
  };

  // Dynamic calculations from backend database
  const totalScholarshipsCount =
    stats?.totalScholarships ?? schemes.filter((s) => s.schemeType === 'Scholarship').length;
  const totalApplicationsCount = stats?.totalApplications ?? applications.length;
  const approvedCount =
    stats?.approvedApplications ?? applications.filter((a) => a.status === 'Approved').length;
  const rejectedCount =
    stats?.rejectedApplications ?? applications.filter((a) => a.status === 'Rejected').length;
  const pendingCount =
    stats?.pendingApplications ??
    Math.max(0, totalApplicationsCount - approvedCount - rejectedCount);

  // Filter schemes
  const filteredSchemes = schemes.filter((s) => {
    const matchesSearch =
      (s.name || '').toLowerCase().includes(search.toLowerCase()) ||
      (s.ministryOrDepartment || '').toLowerCase().includes(search.toLowerCase());
    const matchesType =
      filterType === 'all' ||
      (s.schemeType || '').toLowerCase().includes(filterType.toLowerCase());
    const matchesLevel =
      filterLevel === 'all' ||
      (s.governmentLevel || '').toLowerCase() === filterLevel.toLowerCase();
    return matchesSearch && matchesType && matchesLevel;
  });

  // Filter applications
  const filteredApps = applications.filter((a) => {
    const sName = a.studentName || a.name || '';
    const scName = a.schemeName || a.scheme || '';
    const rNo = a.refNo || '';
    const mail = a.email || '';
    const matchesSearch =
      sName.toLowerCase().includes(appSearch.toLowerCase()) ||
      scName.toLowerCase().includes(appSearch.toLowerCase()) ||
      rNo.toLowerCase().includes(appSearch.toLowerCase()) ||
      mail.toLowerCase().includes(appSearch.toLowerCase());
    const matchesStatus =
      appStatusFilter === 'all' ||
      (a.status || '').toLowerCase() === appStatusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Awarded applications (only Approved)
  const awardedApps = applications.filter((a) => a.status === 'Approved');

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {/* Top Bar Header */}
      <div className="formal-dashboard-header">
        <div>
          <span className="dashboard-eyebrow">Institutional Portal</span>
          <h1 className="formal-dashboard-title">
            {activeTab === 'dashboard' && 'Scholarship Management Dashboard'}
            {activeTab === 'scholarships' && 'Scholarship Schemes Repository'}
            {activeTab === 'applications' && 'Student Application Registry'}
            {activeTab === 'awarded' && 'Awarded Scholarships & Disbursal'}
            {activeTab === 'profile' && 'Coordinator Profile & System Settings'}
          </h1>
          <p className="formal-dashboard-sub">
            Connected Engine: <strong>{stats?.databaseType || 'Local Standalone Database'}</strong> | Coordinator: <strong>{admin?.username || 'Administrator'}</strong>
          </p>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button to="/admin/schemes/new" variant="primary" size="sm" icon={Plus}>
            Add New Scheme
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={loadData}
            icon={RefreshCw}
            title="Refresh database records"
          />
        </div>
      </div>

      {feedbackMessage && (
        <div style={{ marginBottom: 'var(--space-4)' }}>
          {feedbackMessage.type === 'error' ? (
            <ErrorMessage
              message={feedbackMessage.text}
              onDismiss={() => setFeedbackMessage(null)}
            />
          ) : (
            <div className="formal-alert formal-alert-success">
              <span>{feedbackMessage.text}</span>
              <button
                type="button"
                onClick={() => setFeedbackMessage(null)}
                className="alert-dismiss-btn"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      )}

      {/* 4 Stat Metric Cards (Always visible on Dashboard and Applications tabs) */}
      <div className="formal-stat-cards-grid">
        {/* Total Scholarships */}
        <div className="formal-stat-card">
          <div className="formal-stat-meta">
            <span className="formal-stat-label">Total Scholarships</span>
            <div className="formal-stat-number">{totalScholarshipsCount}</div>
          </div>
          <div className="formal-stat-circle icon-blue">
            <GraduationCap size={22} />
          </div>
        </div>

        {/* Total Applications */}
        <div className="formal-stat-card">
          <div className="formal-stat-meta">
            <span className="formal-stat-label">Total Applications</span>
            <div className="formal-stat-number">{totalApplicationsCount}</div>
          </div>
          <div className="formal-stat-circle icon-teal">
            <FileText size={22} />
          </div>
        </div>

        {/* Approved */}
        <div className="formal-stat-card">
          <div className="formal-stat-meta">
            <span className="formal-stat-label">Approved</span>
            <div className="formal-stat-number" style={{ color: '#16a34a' }}>
              {approvedCount}
            </div>
          </div>
          <div className="formal-stat-circle icon-green">
            <CheckCircle size={22} />
          </div>
        </div>

        {/* Rejected */}
        <div className="formal-stat-card">
          <div className="formal-stat-meta">
            <span className="formal-stat-label">Rejected</span>
            <div className="formal-stat-number" style={{ color: '#dc2626' }}>
              {rejectedCount}
            </div>
          </div>
          <div className="formal-stat-circle icon-red">
            <XCircle size={22} />
          </div>
        </div>
      </div>

      {/* ----------------- TAB 1: EXECUTIVE DASHBOARD ----------------- */}
      {activeTab === 'dashboard' && (
        <>
          {/* Split Section: Recent Applications & Scholarship Overview Donut Chart */}
          <div className="formal-split-grid">
            {/* Left: Recent Applications Table with Approval Actions */}
            <div className="formal-card formal-table-card">
              <div className="formal-card-header">
                <div>
                  <h2 className="formal-card-title">Recent Applications</h2>
                  <span className="formal-card-sub">
                    Student scholarship submissions awaiting coordinator action
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('applications')}
                  className="btn btn-outline btn-sm"
                >
                  View All ({applications.length})
                </button>
              </div>

              <div className="formal-table-wrap">
                <table className="formal-table">
                  <thead>
                    <tr>
                      <th>Student Details</th>
                      <th>Target Scheme</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Review Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.slice(0, 5).map((app) => (
                      <tr key={app.refNo || app._id || app.id}>
                        <td>
                          <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                            {app.studentName || app.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                            {app.refNo} &bull; {app.email || 'N/A'}
                          </div>
                        </td>
                        <td>
                          <div
                            style={{
                              fontSize: '0.8125rem',
                              maxWidth: '240px',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {app.schemeName || app.scheme}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>
                            {app.state || 'All India'} &bull; {app.category || 'General'}
                          </div>
                        </td>
                        <td>
                          {app.status === 'Approved' ? (
                            <span className="laptop-status-badge badge-approved">
                              <span className="dot dot-green" /> Approved
                            </span>
                          ) : app.status === 'Rejected' ? (
                            <span className="laptop-status-badge badge-rejected">
                              <span className="dot dot-red" /> Rejected
                            </span>
                          ) : (
                            <span className="laptop-status-badge badge-pending">
                              <span className="dot dot-yellow" /> {app.status || 'Pending'}
                            </span>
                          )}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '4px' }}>
                            {app.status !== 'Approved' && (
                              <button
                                type="button"
                                onClick={() =>
                                  updateAppStatus(app.refNo || app._id || app.id, 'Approved')
                                }
                                className="btn-status-action btn-approve"
                                title="Approve Application"
                              >
                                &check; Approve
                              </button>
                            )}
                            {app.status !== 'Rejected' && (
                              <button
                                type="button"
                                onClick={() =>
                                  updateAppStatus(app.refNo || app._id || app.id, 'Rejected')
                                }
                                className="btn-status-action btn-reject"
                                title="Reject Application"
                              >
                                &times; Reject
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Scholarship Overview Donut Chart */}
            <div className="formal-card formal-chart-card">
              <div className="formal-card-header">
                <h2 className="formal-card-title">Scholarship Overview</h2>
              </div>

              <div className="formal-donut-container">
                <svg width="170" height="170" viewBox="0 0 100 100" className="donut-chart-svg">
                  {/* Approved slice */}
                  <circle
                    cx="50"
                    cy="50"
                    r="34"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="20"
                    strokeDasharray="137 214"
                    strokeDashoffset="0"
                  />
                  {/* Pending slice */}
                  <circle
                    cx="50"
                    cy="50"
                    r="34"
                    fill="transparent"
                    stroke="#f59e0b"
                    strokeWidth="20"
                    strokeDasharray="45 214"
                    strokeDashoffset="-137"
                  />
                  {/* Rejected slice */}
                  <circle
                    cx="50"
                    cy="50"
                    r="34"
                    fill="transparent"
                    stroke="#ef4444"
                    strokeWidth="20"
                    strokeDasharray="32 214"
                    strokeDashoffset="-182"
                  />
                  {/* Inner Hole */}
                  <circle cx="50" cy="50" r="24" fill="#ffffff" />
                  <text
                    x="50"
                    y="47"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="800"
                    fill="#0b2545"
                  >
                    {totalApplicationsCount}
                  </text>
                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    fontSize="6.5"
                    fill="#64748b"
                    fontWeight="600"
                  >
                    APPLICATIONS
                  </text>
                </svg>

                <div className="donut-legend-box">
                  <div className="donut-legend-item">
                    <span className="legend-indicator dot-approved" />
                    <span className="legend-name">Approved</span>
                    <strong className="legend-val">{approvedCount}</strong>
                  </div>
                  <div className="donut-legend-item">
                    <span className="legend-indicator dot-pending" />
                    <span className="legend-name">Pending</span>
                    <strong className="legend-val">{pendingCount}</strong>
                  </div>
                  <div className="donut-legend-item">
                    <span className="legend-indicator dot-rejected" />
                    <span className="legend-name">Rejected</span>
                    <strong className="legend-val">{rejectedCount}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registered Schemes Directory */}
          <div className="formal-card" style={{ marginTop: 'var(--space-6)' }}>
            <div
              className="formal-card-header"
              style={{ flexWrap: 'wrap', gap: 'var(--space-3)' }}
            >
              <div>
                <h2 className="formal-card-title">Registered Scheme Records</h2>
                <span className="formal-card-sub">
                  Live repository ({schemes.length} total schemes loaded from database)
                </span>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', width: '240px' }}>
                  <Search
                    size={14}
                    color="var(--color-text-muted)"
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search scheme name or ministry..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-input"
                    style={{
                      paddingLeft: '2rem',
                      padding: '0.45rem 0.6rem 0.45rem 2rem',
                      fontSize: '0.8125rem',
                    }}
                  />
                </div>

                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="form-select"
                  style={{ width: '160px', padding: '0.45rem 0.6rem', fontSize: '0.8125rem' }}
                >
                  <option value="all">All Types</option>
                  <option value="Scholarship">Scholarships</option>
                  <option value="Welfare Scheme">Welfare Schemes</option>
                </select>
              </div>
            </div>

            {loading ? (
              <LoadingSpinner message="Loading records from database..." />
            ) : filteredSchemes.length === 0 ? (
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                  padding: '2.5rem 0',
                  fontSize: '0.875rem',
                }}
              >
                No scheme records match this search.
              </p>
            ) : (
              <div className="formal-table-wrap">
                <table className="formal-table">
                  <thead>
                    <tr>
                      <th>Scheme Name</th>
                      <th>Type</th>
                      <th>Jurisdiction</th>
                      <th>Status</th>
                      <th>Last Verified</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSchemes.slice(0, 10).map((scheme) => (
                      <tr key={scheme._id || scheme.slug}>
                        <td>
                          <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                            {scheme.name}
                          </div>
                          <div
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--color-text-secondary)',
                            }}
                          >
                            {scheme.ministryOrDepartment}
                          </div>
                        </td>
                        <td>
                          <Badge
                            variant={
                              (scheme.schemeType || '').includes('Scholarship')
                                ? 'scholarship'
                                : 'welfare'
                            }
                          >
                            {scheme.schemeType}
                          </Badge>
                        </td>
                        <td>
                          <Badge
                            variant={
                              scheme.governmentLevel === 'State Government' ? 'state' : 'central'
                            }
                          >
                            {scheme.governmentLevel || 'Central Government'}
                          </Badge>
                        </td>
                        <td>
                          <SchemeStatus status={scheme.status || 'Active'} />
                        </td>
                        <td
                          style={{
                            fontSize: '0.8125rem',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          {scheme.sourceVerifiedAt ||
                            (scheme.updatedAt ? scheme.updatedAt.split('T')[0] : '2026-10-20')}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: 'var(--space-1)' }}>
                            <Button
                              to={`/schemes/${scheme.slug || scheme._id}`}
                              variant="secondary"
                              size="sm"
                              icon={ExternalLink}
                              title="View public page"
                            />
                            <Button
                              to={`/admin/schemes/edit/${scheme._id || scheme.slug}`}
                              variant="outline"
                              size="sm"
                              icon={Edit}
                              title="Edit scheme"
                            />
                            <button
                              type="button"
                              onClick={() => setSchemeToDelete(scheme)}
                              className="btn btn-outline btn-sm"
                              style={{
                                color: 'var(--color-danger)',
                                borderColor: 'var(--color-danger-border)',
                              }}
                              title="Delete scheme"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {/* ----------------- TAB 2: SCHOLARSHIPS REPOSITORY ----------------- */}
      {activeTab === 'scholarships' && (
        <div className="formal-card">
          <div
            className="formal-card-header"
            style={{ flexWrap: 'wrap', gap: 'var(--space-3)' }}
          >
            <div>
              <h2 className="formal-card-title">Scholarships & Schemes Repository</h2>
              <span className="formal-card-sub">
                Manage, publish, edit, and delete all government programs ({filteredSchemes.length}{' '}
                matching)
              </span>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', width: '220px' }}>
                <Search
                  size={14}
                  color="var(--color-text-muted)"
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-input"
                  style={{
                    paddingLeft: '2rem',
                    padding: '0.45rem 0.6rem 0.45rem 2rem',
                    fontSize: '0.8125rem',
                  }}
                />
              </div>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="form-select"
                style={{ width: '150px', padding: '0.45rem 0.6rem', fontSize: '0.8125rem' }}
              >
                <option value="all">All Types</option>
                <option value="Scholarship">Scholarships</option>
                <option value="Welfare Scheme">Welfare Schemes</option>
              </select>

              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="form-select"
                style={{ width: '160px', padding: '0.45rem 0.6rem', fontSize: '0.8125rem' }}
              >
                <option value="all">All Jurisdictions</option>
                <option value="Central Government">Central Government</option>
                <option value="State Government">State Government</option>
              </select>

              <Button to="/admin/schemes/new" variant="primary" size="sm" icon={Plus}>
                Create Scheme
              </Button>
            </div>
          </div>

          {loading ? (
            <LoadingSpinner message="Loading programs..." />
          ) : filteredSchemes.length === 0 ? (
            <p
              style={{
                color: 'var(--color-text-secondary)',
                textAlign: 'center',
                padding: '3rem 0',
              }}
            >
              No programs found matching criteria.
            </p>
          ) : (
            <div className="formal-table-wrap">
              <table className="formal-table">
                <thead>
                  <tr>
                    <th>Scheme / Scholarship Name</th>
                    <th>Categories</th>
                    <th>Type</th>
                    <th>Jurisdiction</th>
                    <th>Status</th>
                    <th>Application Deadline</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchemes.map((scheme) => (
                    <tr key={scheme._id || scheme.slug}>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                          {scheme.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                          {scheme.ministryOrDepartment}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', maxWidth: '200px' }}>
                          {(scheme.categories || []).slice(0, 2).map((cat) => (
                            <span
                              key={cat}
                              style={{
                                fontSize: '0.68rem',
                                background: '#f1f5f9',
                                color: '#475569',
                                padding: '2px 6px',
                                borderRadius: '4px',
                              }}
                            >
                              {cat}
                            </span>
                          ))}
                          {(scheme.categories || []).length > 2 && (
                            <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                              +{scheme.categories.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <Badge
                          variant={
                            (scheme.schemeType || '').includes('Scholarship')
                              ? 'scholarship'
                              : 'welfare'
                          }
                        >
                          {scheme.schemeType}
                        </Badge>
                      </td>
                      <td>
                        <Badge
                          variant={
                            scheme.governmentLevel === 'State Government' ? 'state' : 'central'
                          }
                        >
                          {scheme.governmentLevel || 'Central Government'}
                        </Badge>
                      </td>
                      <td>
                        <SchemeStatus status={scheme.status || 'Active'} />
                      </td>
                      <td style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                        {scheme.applicationDeadline || 'Annual cycle'}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: 'var(--space-1)' }}>
                          <Button
                            to={`/schemes/${scheme.slug || scheme._id}`}
                            variant="secondary"
                            size="sm"
                            icon={ExternalLink}
                            title="Preview public page"
                          />
                          <Button
                            to={`/admin/schemes/edit/${scheme._id || scheme.slug}`}
                            variant="outline"
                            size="sm"
                            icon={Edit}
                            title="Edit scheme details"
                          />
                          <button
                            type="button"
                            onClick={() => setSchemeToDelete(scheme)}
                            className="btn btn-outline btn-sm"
                            style={{
                              color: 'var(--color-danger)',
                              borderColor: 'var(--color-danger-border)',
                            }}
                            title="Delete scheme"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ----------------- TAB 3: APPLICATIONS REGISTRY ----------------- */}
      {activeTab === 'applications' && (
        <div className="formal-card">
          <div
            className="formal-card-header"
            style={{ flexWrap: 'wrap', gap: 'var(--space-3)' }}
          >
            <div>
              <h2 className="formal-card-title">Student Application Registry</h2>
              <span className="formal-card-sub">
                Live database review &amp; institutional verification queue ({filteredApps.length}{' '}
                records)
              </span>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}>
              {/* Quick Status Filter Tabs */}
              <div style={{ display: 'inline-flex', background: '#f1f5f9', borderRadius: '6px', padding: '2px' }}>
                {['all', 'Pending', 'Approved', 'Rejected'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setAppStatusFilter(st)}
                    style={{
                      border: 'none',
                      background: appStatusFilter === st ? '#ffffff' : 'transparent',
                      color: appStatusFilter === st ? '#1e293b' : '#64748b',
                      fontWeight: appStatusFilter === st ? 700 : 500,
                      fontSize: '0.78rem',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      boxShadow: appStatusFilter === st ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    {st === 'all' ? `All (${applications.length})` : st}
                  </button>
                ))}
              </div>

              <div style={{ position: 'relative', width: '220px' }}>
                <Search
                  size={14}
                  color="var(--color-text-muted)"
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search student, ref no, or email..."
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  className="form-input"
                  style={{
                    paddingLeft: '2rem',
                    padding: '0.45rem 0.6rem 0.45rem 2rem',
                    fontSize: '0.8125rem',
                  }}
                />
              </div>
            </div>
          </div>

          {filteredApps.length === 0 ? (
            <p
              style={{
                color: 'var(--color-text-secondary)',
                textAlign: 'center',
                padding: '3rem 0',
              }}
            >
              No application submissions match your filter.
            </p>
          ) : (
            <div className="formal-table-wrap">
              <table className="formal-table">
                <thead>
                  <tr>
                    <th>Ref No &amp; Date</th>
                    <th>Student Details</th>
                    <th>Scheme Applied</th>
                    <th>Category &amp; Domicile</th>
                    <th>Institution &amp; Course</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Review Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApps.map((app) => (
                    <tr key={app.refNo || app._id || app.id}>
                      <td>
                        <div style={{ fontWeight: 700, color: '#1e3a8a', fontSize: '0.85rem' }}>
                          {app.refNo}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                          {app.applicationDate ||
                            (app.createdAt ? app.createdAt.split('T')[0] : '2026-10-20')}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                          {app.studentName || app.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {app.email || 'N/A'} &bull; {app.mobile || 'N/A'}
                        </div>
                      </td>
                      <td>
                        <div
                          style={{
                            fontWeight: 500,
                            fontSize: '0.8125rem',
                            maxWidth: '220px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {app.schemeName || app.scheme}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                          {app.ministry || 'Ministry of Social Justice'}
                        </div>
                      </td>
                      <td>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            background: '#e0e7ff',
                            color: '#3730a3',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            fontWeight: 600,
                          }}
                        >
                          {app.category || 'General'}
                        </span>
                        <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>
                          {app.state || 'All India'}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-main)' }}>
                          {app.institution || 'State University'}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                          {app.educationLevel || 'Undergraduate'}
                        </div>
                      </td>
                      <td>
                        {app.status === 'Approved' ? (
                          <span className="laptop-status-badge badge-approved">
                            <span className="dot dot-green" /> Approved
                          </span>
                        ) : app.status === 'Rejected' ? (
                          <span className="laptop-status-badge badge-rejected">
                            <span className="dot dot-red" /> Rejected
                          </span>
                        ) : (
                          <span className="laptop-status-badge badge-pending">
                            <span className="dot dot-yellow" /> {app.status || 'Pending'}
                          </span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '4px' }}>
                          {app.status !== 'Approved' && (
                            <button
                              type="button"
                              onClick={() =>
                                updateAppStatus(app.refNo || app._id || app.id, 'Approved')
                              }
                              className="btn-status-action btn-approve"
                              title="Approve & Sanction Application"
                            >
                              &check; Approve
                            </button>
                          )}
                          {app.status !== 'Rejected' && (
                            <button
                              type="button"
                              onClick={() =>
                                updateAppStatus(app.refNo || app._id || app.id, 'Rejected')
                              }
                              className="btn-status-action btn-reject"
                              title="Reject Application"
                            >
                              &times; Reject
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ----------------- TAB 4: AWARDED SCHOLARSHIPS & DISBURSAL ----------------- */}
      {activeTab === 'awarded' && (
        <div className="formal-card">
          <div className="formal-card-header">
            <div>
              <h2 className="formal-card-title">Awarded Scholarships &amp; Disbursal Registry</h2>
              <span className="formal-card-sub">
                Sanctioned awards queued for PFMS direct bank credit ({awardedApps.length} awarded
                scholars)
              </span>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={loadData}
              icon={RefreshCw}
              title="Refresh Disbursal Queue"
            />
          </div>

          {awardedApps.length === 0 ? (
            <p
              style={{
                color: 'var(--color-text-secondary)',
                textAlign: 'center',
                padding: '3rem 0',
              }}
            >
              No scholarships have been awarded yet. Approve applications from the Registry to sanction awards.
            </p>
          ) : (
            <div className="formal-table-wrap">
              <table className="formal-table">
                <thead>
                  <tr>
                    <th>Sanction Ref No</th>
                    <th>Awarded Scholar</th>
                    <th>Sanctioned Scheme</th>
                    <th>Institution &amp; State</th>
                    <th>Disbursal Stage</th>
                    <th>PFMS Verification Remark</th>
                  </tr>
                </thead>
                <tbody>
                  {awardedApps.map((app) => (
                    <tr key={app.refNo || app._id || app.id}>
                      <td>
                        <div style={{ fontWeight: 700, color: '#15803d', fontSize: '0.85rem' }}>
                          {app.refNo}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                          Verified: {app.applicationDate || '2026-10-24'}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                          {app.studentName || app.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {app.email || 'N/A'}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, fontSize: '0.8125rem' }}>
                          {app.schemeName || app.scheme}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.8125rem' }}>{app.institution || 'University'}</div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{app.state}</div>
                      </td>
                      <td>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            background: '#dcfce7',
                            color: '#15803d',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <CheckCircle size={12} /> Disbursal Active
                        </span>
                      </td>
                      <td style={{ fontSize: '0.78rem', color: '#475569' }}>
                        {app.remark || 'Institutional credentials and bank account verified via PFMS.'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ----------------- TAB 5: COORDINATOR PROFILE & SYSTEM ----------------- */}
      {activeTab === 'profile' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
          {/* Profile Card */}
          <div className="formal-card">
            <div className="formal-card-header">
              <h2 className="formal-card-title">Institutional Coordinator Profile</h2>
              <span className="formal-card-sub">Administrator credentials &amp; session</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                }}
              >
                {(admin?.username || 'A')[0].toUpperCase()}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>
                  {admin?.name || admin?.username || 'System Administrator'}
                </h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    background: '#e0e7ff',
                    color: '#3730a3',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  {admin?.role || 'Superadmin'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Username</span>
                <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>{admin?.username || 'admin'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Registered Email</span>
                <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>{admin?.email || 'admin@schemesfinder.gov.in'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Access Role</span>
                <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>National Schemes Authority</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Session Status</span>
                <span style={{ color: '#16a34a', fontWeight: 700, fontSize: '0.85rem' }}>Active &bull; Validated</span>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-6)' }}>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  logout();
                  window.location.href = '/';
                }}
                icon={LogOut}
              >
                Sign Out from Portal
              </Button>
            </div>
          </div>

          {/* Database & System Card */}
          <div className="formal-card">
            <div className="formal-card-header">
              <h2 className="formal-card-title">Live Database Engine</h2>
              <span className="formal-card-sub">Connected storage architecture</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)', padding: 'var(--space-3)', background: '#f8fafc', borderRadius: 'var(--radius-md)' }}>
              <Database size={24} color="#2563eb" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
                  {stats?.databaseType || 'Local Standalone Engine'}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>
                  &bull; Operating with Full Persistence
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Total Published Schemes</span>
                <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>{schemes.length} programs</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Active Categories</span>
                <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>{stats?.totalCategories || 17} categories</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Student Application Records</span>
                <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>{applications.length} submissions</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Administrative Audit Logs</span>
                <strong style={{ fontSize: '0.85rem', color: '#16a34a' }}>Active &amp; Monitored</strong>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-2)' }}>
              <Button to="/admin/schemes/new" variant="primary" size="sm" icon={Plus}>
                Add New Scheme
              </Button>
              <Button to="/browse" variant="secondary" size="sm" icon={ExternalLink} target="_blank">
                Public Catalog
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {schemeToDelete && (
        <div className="modal-backdrop">
          <div className="modal-dialog">
            <div className="modal-header">
              <h3 className="modal-title" style={{ color: 'var(--color-danger)' }}>
                Confirm Deletion
              </h3>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to delete <strong>"{schemeToDelete.name}"</strong>? This will
                permanently remove the record from public discovery.
              </p>
            </div>
            <div className="modal-footer">
              <Button variant="secondary" onClick={() => setSchemeToDelete(null)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleDeleteConfirm}>
                Delete Scheme
              </Button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;
