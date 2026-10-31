import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import BrowseSchemes from './pages/BrowseSchemes';
import Scholarships from './pages/Scholarships';
import GovernmentSchemes from './pages/GovernmentSchemes';
import CategoryDetails from './pages/CategoryDetails';
import SchemeDetails from './pages/SchemeDetails';
import EligibilityChecker from './pages/EligibilityChecker';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminSchemeFormPage from './pages/AdminSchemeForm';
import NotFound from './pages/NotFound';

import './styles/variables.css';
import './styles/global.css';
import './styles/glassmorphism.css';
import './styles/components.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Subtle Ambient Depth Layer for Glass Surfaces */}
        <div className="ambient-glow-mesh" aria-hidden="true">
          <div className="ambient-orb ambient-orb-1" />
          <div className="ambient-orb ambient-orb-2" />
          <div className="ambient-orb ambient-orb-3" />
        </div>

        <Navbar />
        <AnnouncementBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowseSchemes />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/government-schemes" element={<GovernmentSchemes />} />
            <Route path="/category/:slug" element={<CategoryDetails />} />
            <Route path="/schemes/:identifier" element={<SchemeDetails />} />
            <Route path="/eligibility-checker" element={<EligibilityChecker />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/schemes/new"
              element={
                <ProtectedRoute>
                  <AdminSchemeFormPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/schemes/edit/:id"
              element={
                <ProtectedRoute>
                  <AdminSchemeFormPage />
                </ProtectedRoute>
              }
            />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
