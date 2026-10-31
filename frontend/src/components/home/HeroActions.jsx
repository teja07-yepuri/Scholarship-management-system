import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, ClipboardCheck } from 'lucide-react';
import Button from '../common/Button';
import Magnet from '../reactbits/Magnet';

/**
 * HeroActions
 * Renders the primary and secondary call-to-action buttons for the hero section
 * with gentle magnetic attraction on the primary CTA.
 */
const HeroActions = ({ onOpenTracker }) => {
  const navigate = useNavigate();

  return (
    <div className="hero-actions-container">
      <Magnet strength={12}>
        <Button
          to="/scholarships"
          variant="primary"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          className="hero-primary-btn"
        >
          Browse Scholarships
        </Button>
      </Magnet>

      <Button
        to="/eligibility-checker"
        variant="outline"
        size="lg"
        icon={Sparkles}
        className="hero-secondary-btn"
      >
        Check Eligibility
      </Button>

      <Button
        variant="secondary"
        size="lg"
        icon={ClipboardCheck}
        onClick={onOpenTracker}
        className="hero-tertiary-btn"
      >
        Track Application
      </Button>
    </div>
  );
};

export default HeroActions;
