import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Tractor,
  HeartHandshake,
  HardHat,
  Store,
  ShieldAlert,
  Layers,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
  Users,
  UserCheck,
  Accessibility,
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  Tractor,
  HeartHandshake,
  HardHat,
  Store,
  ShieldAlert,
  UserCheck,
  Accessibility,
  Layers,
  BookOpen,
  Award,
  Sparkles,
  Users,
};

const CategoryCard = ({ category, schemeCount }) => {
  const IconComponent = iconMap[category.icon] || Layers;

  return (
    <Link to={`/category/${category.slug}`} className="category-card">
      <div className="category-card-icon">
        <IconComponent size={20} />
      </div>
      <h3 className="category-card-title">{category.name}</h3>
      <p className="category-card-desc">{category.description}</p>
      <div className="category-card-footer">
        <span>{schemeCount !== undefined ? `${schemeCount} Schemes` : 'View Schemes'}</span>
        <ArrowRight size={14} />
      </div>
    </Link>
  );
};

export default CategoryCard;
