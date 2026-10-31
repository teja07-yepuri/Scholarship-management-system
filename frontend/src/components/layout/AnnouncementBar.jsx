import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight } from 'lucide-react';
import PageContainer from './PageContainer';

const AnnouncementBar = ({
  message = 'Central Sector & Post-Matric scholarship schemes are published for the current academic session.',
  linkText = 'View Scholarships',
  linkTo = '/scholarships',
}) => {
  return (
    <aside className="announcement-bar" aria-label="Portal announcements">
      <PageContainer>
        <div className="announcement-flex">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
            <span className="announcement-label">
              <Bell size={13} /> Notice:
            </span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {message}
            </span>
          </div>

          {linkTo && (
            <Link to={linkTo} className="announcement-link">
              <span>{linkText}</span>
              <ArrowRight size={12} />
            </Link>
          )}
        </div>
      </PageContainer>
    </aside>
  );
};

export default AnnouncementBar;
