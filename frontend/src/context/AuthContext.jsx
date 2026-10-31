import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginAdmin, fetchAdminProfile } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    try {
      const saved = localStorage.getItem('schemes_finder_admin_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(localStorage.getItem('schemes_finder_admin_token') || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = localStorage.getItem('schemes_finder_admin_token');
      if (storedToken) {
        try {
          const res = await fetchAdminProfile(storedToken);
          if (res.success && res.admin) {
            setAdmin(res.admin);
            localStorage.setItem('schemes_finder_admin_user', JSON.stringify(res.admin));
          } else {
            logout();
          }
        } catch (err) {
          console.warn('Token validation failed:', err.message);
          logout();
        }
      }
    };

    if (token) {
      verifyToken();
    }
  }, [token]);

  const login = async (identifier, password) => {
    const res = await loginAdmin(identifier, password);
    if (res.success && res.token) {
      localStorage.setItem('schemes_finder_admin_token', res.token);
      localStorage.setItem('schemes_finder_admin_user', JSON.stringify(res.admin));
      setToken(res.token);
      setAdmin(res.admin);
      return res;
    }
    throw new Error(res.message || 'Login failed');
  };

  const logout = () => {
    localStorage.removeItem('schemes_finder_admin_token');
    localStorage.removeItem('schemes_finder_admin_user');
    setToken(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        token,
        isAuthenticated: !!token && !!admin,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
