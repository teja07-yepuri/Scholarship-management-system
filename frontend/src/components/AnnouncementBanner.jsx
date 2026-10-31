import React from 'react';
import { Bell, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnouncementBanner = () => {
  return (
    <div className="announcement-bar">
      <div className="container announcement-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span className="announcement-tag">
            <Bell size={12} /> Live Announcement
          </span>
          <span>
            <strong>National Scholarship Portal (NSP 2025-26):</strong> Post-Matric & Central Sector applications are open. Complete Aadhaar e-KYC before submitting.
          </span>
        </div>
        <Link
          to="/browse?schemeType=Scholarship"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.825rem',
            fontWeight: '600',
            color: '#b45309',
            whiteSpace: 'nowrap',
          }}
        >
          Explore Scholarships <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
