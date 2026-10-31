import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Calendar,
  Building2,
  CheckCircle,
  MapPin,
  ArrowRight,
  Award,
} from 'lucide-react';

const SchemeCard = ({ scheme }) => {
  const isScholarship = scheme.schemeType === 'Scholarship';
  const isCentral = scheme.governmentLevel === 'Central Government';

  return (
    <div className="scheme-card">
      <div className="scheme-card-header">
        <div className="scheme-tags-row">
          <span className={`badge ${isScholarship ? 'badge-scholarship' : 'badge-welfare'}`}>
            <Award size={12} /> {scheme.schemeType}
          </span>
          <span className={`badge ${isCentral ? 'badge-central' : 'badge-state'}`}>
            {scheme.governmentLevel}
          </span>
          {scheme.status && (
            <span className="badge badge-active">
              ● {scheme.status}
            </span>
          )}
        </div>
      </div>

      <h3 className="scheme-title">
        <Link to={`/schemes/${scheme.slug || scheme._id}`}>{scheme.name}</Link>
      </h3>

      <div className="scheme-ministry">
        <Building2 size={14} />
        <span>{scheme.ministryOrDepartment || 'Government of India'}</span>
      </div>

      <p className="scheme-desc">{scheme.shortDescription}</p>

      {scheme.benefits && scheme.benefits.length > 0 && (
        <div className="scheme-key-benefits">
          <div className="scheme-key-benefits-title">Key Benefit Highlights</div>
          <div className="scheme-key-benefits-text">{scheme.benefits[0]}</div>
        </div>
      )}

      <div className="scheme-card-meta">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <MapPin size={13} color="var(--slate-400)" />
          {scheme.states?.includes('All India') ? 'All India' : scheme.states?.join(', ') || 'All India'}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <Calendar size={13} color="var(--slate-400)" />
          {scheme.applicationDeadline || 'Open Cycle'}
        </span>
      </div>

      <div className="scheme-card-actions">
        <Link to={`/schemes/${scheme.slug || scheme._id}`} className="btn btn-secondary btn-sm">
          <span>View Details</span>
          <ArrowRight size={14} />
        </Link>

        {scheme.officialApplicationUrl ? (
          <a
            href={scheme.officialApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            title="Opens official government portal"
          >
            <span>Apply Online</span>
            <ExternalLink size={13} />
          </a>
        ) : (
          <Link to={`/schemes/${scheme.slug || scheme._id}`} className="btn btn-outline btn-sm">
            <span>Learn More</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SchemeCard;
