import {
  getApplications,
  getApplicationByRefOrId,
  createApplication,
  updateApplicationStatus,
  getApplicationStats,
} from '../services/storageService.js';

// @desc    Submit new student application
// @route   POST /api/applications
export const submitApplication = async (req, res, next) => {
  try {
    const {
      studentName,
      email,
      mobile,
      schemeId,
      schemeName,
      ministry,
      state,
      category,
      educationLevel,
      institution,
    } = req.body;

    if (!studentName || !email) {
      return res.status(400).json({
        success: false,
        message: 'Student name and email are required.',
      });
    }

    const application = await createApplication({
      studentName: studentName.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile ? mobile.trim() : '',
      schemeId: schemeId || '',
      schemeName: schemeName ? schemeName.trim() : 'National Scholarship Application',
      ministry: ministry || 'Department of Higher Education & Welfare',
      state: state || 'All India',
      category: category || 'General',
      educationLevel: educationLevel || 'Undergraduate',
      institution: institution ? institution.trim() : '',
    });

    res.status(201).json({
      success: true,
      message: 'Scholarship application registered successfully.',
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Track application status by reference number, email, or name
// @route   GET /api/applications/track/:query
export const trackApplication = async (req, res, next) => {
  try {
    const { query } = req.params;
    if (!query) {
      return res.status(400).json({
        success: false,
        message: 'Application reference number or student name is required.',
      });
    }

    const application = await getApplicationByRefOrId(query);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: `No application matching '${query}' was found. Please check your reference number.`,
      });
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all applications (Admin)
// @route   GET /api/applications
export const listApplications = async (req, res, next) => {
  try {
    const { search, status, page, limit } = req.query;
    const data = await getApplications({
      search,
      status,
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 50,
    });

    res.status(200).json({
      success: true,
      data: data.applications,
      pagination: data.pagination,
      stats: data.stats,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update application review status (Admin)
// @route   PUT /api/applications/:id/status
export const changeApplicationStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, remark, nextStep } = req.body;

    if (!status || !['Pending', 'Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be 'Pending', 'Approved', or 'Rejected'.",
      });
    }

    const adminUsername = req.admin ? req.admin.username : 'Administrator';
    const updated = await updateApplicationStatus(id, status, remark, nextStep, adminUsername);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Application with ID or Ref '${id}' was not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Application status updated to ${status}.`,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get overall application statistics
// @route   GET /api/applications/stats
export const getStats = async (req, res, next) => {
  try {
    const stats = await getApplicationStats();
    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    next(error);
  }
};
