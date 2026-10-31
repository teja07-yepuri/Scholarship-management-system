import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="admin-formal-layout">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="admin-formal-content">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
