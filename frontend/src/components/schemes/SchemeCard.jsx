import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar, MapPin, ExternalLink, ArrowRight, Award } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import SchemeStatus from './SchemeStatus';

const SchemeCard = ({ scheme }) => {
  const isScholarship = scheme.schemeType === 'Scholarship';
  const isCentral = scheme.governmentLevel === 'Central Government';

  return (
    <article className="scheme-card">
      {/* Badges Row */}
      <div className="scheme-card-badges">
        <Badge variant={isScholarship ? 'scholarship' : 'welfare'}>
          {scheme.schemeType}
        </Badge>
        <Badge variant={isCentral ? 'central' : 'state'}>
          {scheme.governmentLevel}
        </Badge>
        {scheme.status && <SchemeStatus status={scheme.status} />}
      </div>

      {/* Scheme Title */}
      <h3 className="scheme-card-title">
        <Link to={`/schemes/${scheme.slug || scheme._id}`}>{scheme.name}</Link>
      </h3>

      {/* Administering Ministry */}
      <div className="scheme-card-ministry">
        <Building2 size={13} style={{ flexShrink: 0 }} />
        <span>{scheme.ministryOrDepartment || 'Government Authority'}</span>
      </div>

      {/* Description */}
      <p className="scheme-card-desc">{scheme.shortDescription}</p>

      {/* Verified Benefits Highlight */}
      {scheme.benefits && scheme.benefits.length > 0 && (
        <div className="scheme-card-benefit-box">
          <div className="scheme-card-benefit-label">Verified Benefit</div>
          <div className="scheme-card-benefit-text">{scheme.benefits[0]}</div>
        </div>
      )}

      {/* Meta: Region & Deadline */}
      <div className="scheme-card-meta">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <MapPin size={12} color="var(--color-text-muted)" />
          {scheme.states?.includes('All India') ? 'All India' : scheme.states?.join(', ') || 'All India'}
        </span>
        {scheme.applicationDeadline && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={12} color="var(--color-text-muted)" />
            {scheme.applicationDeadline}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="scheme-card-actions">
        <Button
          to={`/schemes/${scheme.slug || scheme._id}`}
          variant="secondary"
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
        >
          View Details
        </Button>

        {scheme.officialApplicationUrl ? (
          <Button
            href={scheme.officialApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={ExternalLink}
            iconPosition="right"
            title="Opens official government portal"
          >
            Apply Online
          </Button>
        ) : (
          <Button
            to={`/schemes/${scheme.slug || scheme._id}`}
            variant="outline"
            size="sm"
          >
            Learn More
          </Button>
        )}
      </div>
    </article>
  );
};

export default SchemeCard;
