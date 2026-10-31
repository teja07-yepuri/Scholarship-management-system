const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Common request helper with error handling
 */
const request = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API Error on [${options.method || 'GET'} ${endpoint}]:`, error);
    throw error;
  }
};

// --- SYSTEM & HEALTH API ---
export const fetchHealth = async () => {
  return request('/health');
};

// --- SCHEMES API ---
export const fetchSchemes = async (params = {}) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '' && value !== 'all') {
      query.append(key, value);
    }
  });
  const queryString = query.toString() ? `?${query.toString()}` : '';
  return request(`/schemes${queryString}`);
};

export const fetchSchemeByIdOrSlug = async (identifier) => {
  return request(`/schemes/${identifier}`);
};

export const createScheme = async (schemeData, token) => {
  return request('/schemes', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(schemeData),
  });
};

export const updateScheme = async (identifier, schemeData, token) => {
  return request(`/schemes/${identifier}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(schemeData),
  });
};

export const deleteScheme = async (identifier, token) => {
  return request(`/schemes/${identifier}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
};

// --- CATEGORIES API ---
export const fetchCategories = async () => {
  return request('/categories');
};

export const fetchCategoryBySlug = async (slug) => {
  return request(`/categories/${slug}`);
};

// --- ELIGIBILITY API ---
export const evaluateEligibility = async (profileData) => {
  return request('/eligibility/check', {
    method: 'POST',
    body: JSON.stringify(profileData),
  });
};

// --- ADMIN API ---
export const loginAdmin = async (identifier, password) => {
  return request('/admin/login', {
    method: 'POST',
    body: JSON.stringify({ identifier, password }),
  });
};

export const fetchAdminProfile = async (token) => {
  return request('/admin/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const fetchAdminStats = async (token) => {
  return request('/admin/stats', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// --- APPLICATIONS TRACKING API ---
export const trackApplication = async (query) => {
  return request(`/applications/track/${encodeURIComponent(query)}`);
};

export const submitApplication = async (applicationData) => {
  return request('/applications', {
    method: 'POST',
    body: JSON.stringify(applicationData),
  });
};

export const fetchApplications = async (token, params = {}) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '' && value !== 'all') {
      query.append(key, value);
    }
  });
  const queryString = query.toString() ? `?${query.toString()}` : '';
  return request(`/applications${queryString}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateApplicationReviewStatus = async (identifier, statusData, token) => {
  return request(`/applications/${identifier}/status`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(statusData),
  });
};

// --- SAVED SCHEMES API ---
export const saveScheme = async (saveData) => {
  return request('/users/saved-schemes', {
    method: 'POST',
    body: JSON.stringify(saveData),
  });
};

export const fetchSavedSchemes = async (email) => {
  return request(`/users/saved-schemes?email=${encodeURIComponent(email)}`);
};

export const removeSavedScheme = async (slug, email) => {
  return request(`/users/saved-schemes/${encodeURIComponent(slug)}?userEmail=${encodeURIComponent(email)}`, {
    method: 'DELETE',
  });
};
