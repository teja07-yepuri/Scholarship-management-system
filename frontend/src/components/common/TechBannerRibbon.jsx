import React from 'react';
import { Code2, Database, Globe, Layers, Server } from 'lucide-react';

const TechBannerRibbon = () => {
  return (
    <div className="tech-ribbon-section">
      <div className="tech-ribbon-grid">
        {/* PHP badge */}
        <div className="tech-badge-item">
          <div className="tech-icon-pill php-pill">
            <span className="tech-pill-text">php</span>
          </div>
          <span className="tech-label">PHP / Node.js</span>
        </div>

        {/* MySQL badge */}
        <div className="tech-badge-item">
          <div className="tech-icon-pill mysql-pill">
            <span className="tech-dolphin-icon">🐬</span>
            <span className="tech-pill-text mysql-text">MySQL</span>
          </div>
          <span className="tech-label">MySQL / DB</span>
        </div>

        {/* HTML5 badge */}
        <div className="tech-badge-item">
          <div className="tech-icon-shield html-shield">
            <span className="shield-tag">HTML</span>
            <span className="shield-num">5</span>
          </div>
          <span className="tech-label">HTML5</span>
        </div>

        {/* CSS3 badge */}
        <div className="tech-badge-item">
          <div className="tech-icon-shield css-shield">
            <span className="shield-tag">CSS</span>
            <span className="shield-num">3</span>
          </div>
          <span className="tech-label">CSS3</span>
        </div>

        {/* Web Development badge */}
        <div className="tech-badge-item">
          <div className="tech-icon-monitor">
            <span className="code-brackets">&lt;/&gt;</span>
          </div>
          <span className="tech-label">Web Development</span>
        </div>
      </div>
    </div>
  );
};

export default TechBannerRibbon;
