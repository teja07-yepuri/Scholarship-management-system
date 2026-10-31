import React from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../components/admin/AdminLayout';
import AdminSchemeFormComponent from '../components/admin/AdminSchemeForm';

const AdminSchemeFormPage = () => {
  const { id } = useParams();

  return (
    <AdminLayout>
      <AdminSchemeFormComponent schemeId={id} />
    </AdminLayout>
  );
};

export default AdminSchemeFormPage;
