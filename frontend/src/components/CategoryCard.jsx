import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Tractor,
  HeartHandshake,
  HardHat,
  Store,
  ShieldAlert,
  UserCheck,
  Accessibility,
  Layers,
  ArrowRight,
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
};

const CategoryCard = ({ category, schemeCount }) => {
  const IconComponent = iconMap[category.icon] || Layers;

  return (
    <Link to={`/category/${category.slug}`} className="category-card">
      <div className="category-icon-bubble">
        <IconComponent size={26} />
      </div>
      <h3 className="category-title">{category.name}</h3>
      <p className="category-desc">{category.description}</p>
      <div className="category-footer">
        <span className="category-count">
          {schemeCount !== undefined ? `${schemeCount} Verified Schemes` : 'Explore Benefits'}
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>
          View <ArrowRight size={14} style={{ marginLeft: '4px' }} />
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
