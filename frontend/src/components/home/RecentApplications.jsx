import React from 'react';
import { FileText, ArrowRight, Clock } from 'lucide-react';
import ApplicationStatusBadge from '../common/ApplicationStatusBadge';

/**
 * RecentApplications
 * Renders the recent application submissions activity table/list.
 */
const RecentApplications = ({
  applications = [],
  onSelectApplication,
  onViewAll,
  maxItems = 4,
}) => {
  const displayItems = applications.slice(0, maxItems);

  if (!displayItems || displayItems.length === 0) {
    return (
      <div className="recent-apps-empty">
        <Clock size={20} className="text-secondary" />
        <span>No recent applications recorded.</span>
      </div>
    );
  }

  return (
    <div className="recent-apps-container">
      <div className="recent-apps-list">
        {displayItems.map((app) => (
          <div
            key={app.id || app.refNo}
            className="recent-app-item"
            onClick={() => onSelectApplication && onSelectApplication(app)}
            role={onSelectApplication ? 'button' : undefined}
            tabIndex={onSelectApplication ? 0 : undefined}
          >
            <div className="recent-app-avatar">
              <span className="avatar-initials">
                {app.name
                  ? app.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')
                      .toUpperCase()
                  : 'ST'}
              </span>
            </div>

            <div className="recent-app-info">
              <div className="recent-app-topline">
                <span className="recent-app-name">{app.name}</span>
                <ApplicationStatusBadge status={app.status} size="sm" />
              </div>
              <div className="recent-app-subline">
                <span className="recent-app-scheme" title={app.scheme}>
                  {app.scheme}
                </span>
                {app.refNo && <span className="recent-app-ref">{app.refNo}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {onViewAll && (
        <div className="recent-apps-footer">
          <button
            type="button"
            onClick={onViewAll}
            className="recent-apps-view-all-btn"
          >
            <span>View All Applications</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentApplications;
