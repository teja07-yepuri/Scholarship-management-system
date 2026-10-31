import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, FileEdit, ClipboardCheck, UserCog, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 'registration',
    title: 'Student Registration',
    desc: 'Register profile & academic details',
    icon: Users,
    bg: '#f0f9ff',
    border: '#bae6fd',
    iconBg: '#0284c7',
    iconColor: '#ffffff',
    textColor: '#0369a1',
    actionType: 'modal-registration',
  },
  {
    id: 'apply',
    title: 'Apply for Scholarships',
    desc: 'Browse & apply with eligibility',
    icon: FileEdit,
    bg: '#f0fdf4',
    border: '#bbf7d0',
    iconBg: '#16a34a',
    iconColor: '#ffffff',
    textColor: '#15803d',
    actionType: 'navigate',
    path: '/scholarships',
  },
  {
    id: 'track',
    title: 'Track Applications',
    desc: 'Check live review & approval status',
    icon: ClipboardCheck,
    bg: '#faf5ff',
    border: '#e9d5ff',
    iconBg: '#9333ea',
    iconColor: '#ffffff',
    textColor: '#7e22ce',
    actionType: 'modal-track',
  },
  {
    id: 'manage',
    title: 'Manage Scholarships',
    desc: 'Admin catalogue & quota configuration',
    icon: UserCog,
    bg: '#fffbeb',
    border: '#fde68a',
    iconBg: '#d97706',
    iconColor: '#ffffff',
    textColor: '#b45309',
    actionType: 'navigate',
    path: '/admin/dashboard',
  },
  {
    id: 'approve',
    title: 'Approve / Reject Applications',
    desc: 'Coordinator verification workflow',
    icon: CheckCircle,
    bg: '#fff1f2',
    border: '#fecdd3',
    iconBg: '#e11d48',
    iconColor: '#ffffff',
    textColor: '#be123c',
    actionType: 'navigate',
    path: '/admin/dashboard',
  },
];

const WorkflowStepCards = ({ onOpenRegistration, onOpenTracker }) => {
  const navigate = useNavigate();

  const handleCardClick = (step) => {
    if (step.actionType === 'modal-registration' && onOpenRegistration) {
      onOpenRegistration();
    } else if (step.actionType === 'modal-track' && onOpenTracker) {
      onOpenTracker();
    } else if (step.actionType === 'navigate' && step.path) {
      navigate(step.path);
    }
  };

  return (
    <div className="workflow-steps-container">
      <div className="workflow-steps-grid">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => handleCardClick(step)}
              className="workflow-step-card"
              style={{
                backgroundColor: step.bg,
                borderColor: step.border,
              }}
              title={`Click to open: ${step.title}`}
            >
              <div
                className="workflow-step-icon-wrap"
                style={{ backgroundColor: step.iconBg, color: step.iconColor }}
              >
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <div className="workflow-step-title" style={{ color: step.textColor }}>
                {step.title}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WorkflowStepCards;
