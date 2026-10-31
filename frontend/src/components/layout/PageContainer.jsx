import React from 'react';

const PageContainer = ({ children, className = '', style }) => {
  return (
    <div className={`page-container ${className}`.trim()} style={style}>
      {children}
    </div>
  );
};

export default PageContainer;
