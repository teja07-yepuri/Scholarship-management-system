import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserPlus,
  Send,
  ClipboardList,
  Sliders,
  CheckCheck,
} from 'lucide-react';
import FeatureCard from './FeatureCard';
import { useAuth } from '../../context/AuthContext';

/**
 * FeatureGrid
 * Renders the 5 institutional workflow steps with cohesive design tokens,
 * Lucide icons, role checking, and seamless modal / navigation integration.
 */
const FeatureGrid = ({ onOpenRegistration, onOpenTracker }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const features = [
    {
      id: 'register',
      title: 'Student Registration',
      description: 'Create your academic profile, upload eligibility documents, and auto-match schemes.',
      icon: UserPlus,
      roleLabel: 'Student Portal',
      isAdminOnly: false,
      actionText: 'Register Now',
      onClick: onOpenRegistration,
    },
    {
      id: 'apply',
      title: 'Apply for Scholarships',
      description: 'Explore active central, state, and UGC merit schemes with direct application links.',
      icon: Send,
      roleLabel: 'Student Portal',
      isAdminOnly: false,
      actionText: 'Browse & Apply',
      onClick: () => navigate('/scholarships'),
    },
    {
      id: 'track',
      title: 'Track Applications',
      description: 'Monitor real-time verification stages, nodal officer remarks, and DBT grant status.',
      icon: ClipboardList,
      roleLabel: 'Student Portal',
      isAdminOnly: false,
      actionText: 'Track Status',
      onClick: onOpenTracker,
    },
    {
      id: 'manage',
      title: 'Manage Scholarships',
      description: 'Configure quotas, update eligibility criteria, and publish new academic welfare programs.',
      icon: Sliders,
      roleLabel: 'Admin / Coordinator',
      isAdminOnly: true,
      actionText: isAuthenticated ? 'Manage Schemes' : 'Admin Login',
      onClick: () => navigate(isAuthenticated ? '/admin/dashboard' : '/admin/login'),
    },
    {
      id: 'approve',
      title: 'Approve / Reject Applications',
      description: 'Scrutinize student documents, verify quotas, and issue official sanction orders.',
      icon: CheckCheck,
      roleLabel: 'Admin / Coordinator',
      isAdminOnly: true,
      actionText: isAuthenticated ? 'Review Applications' : 'Admin Login',
      onClick: () => navigate(isAuthenticated ? '/admin/dashboard' : '/admin/login'),
    },
  ];

  return (
    <div className="feature-grid-wrapper">
      <div className="feature-grid-container">
        {features.map((feat) => (
          <FeatureCard
            key={feat.id}
            title={feat.title}
            description={feat.description}
            icon={feat.icon}
            roleLabel={feat.roleLabel}
            isAdminOnly={feat.isAdminOnly}
            isAuthenticated={isAuthenticated}
            actionText={feat.actionText}
            onClick={feat.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
