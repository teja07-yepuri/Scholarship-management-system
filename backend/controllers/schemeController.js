import {
  getSchemes,
  getSchemeByIdOrSlug,
  createScheme,
  updateScheme,
  deleteScheme,
} from '../services/storageService.js';

// @desc    Get all schemes with search, filters, sorting, and pagination
// @route   GET /api/schemes
export const listSchemes = async (req, res, next) => {
  try {
    const {
      search,
      category,
      schemeType,
      governmentLevel,
      state,
      educationLevel,
      status,
      sortBy,
      order,
      page,
      limit,
      featured,
    } = req.query;

    const data = await getSchemes({
      search,
      category,
      schemeType,
      governmentLevel,
      state,
      educationLevel,
      status,
      sortBy,
      order,
      page: page ? parseInt(page, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 10,
      featuredOnly: featured === 'true',
    });

    res.status(200).json({
      success: true,
      data: data.schemes,
      pagination: data.pagination,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single scheme by ID or slug
// @route   GET /api/schemes/:identifier
export const getScheme = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const scheme = await getSchemeByIdOrSlug(identifier);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: `Scheme with ID or slug '${identifier}' was not found.`,
      });
    }

    res.status(200).json({
      success: true,
      data: scheme,
    });
  } catch (error) {
    next(error);
  }
};

// Helper to create slug from title
const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

// @desc    Create a new scheme (Admin Only)
// @route   POST /api/schemes
export const addScheme = async (req, res, next) => {
  try {
    const {
      name,
      shortDescription,
      description,
      schemeType,
      governmentLevel,
      ministryOrDepartment,
      categories,
      states,
      beneficiaryTypes,
      benefits,
      eligibilityRules,
      requiredDocuments,
      applicationSteps,
      applicationStartDate,
      applicationDeadline,
      officialInformationUrl,
      officialApplicationUrl,
      sourceVerifiedAt,
      status,
      isFeatured,
    } = req.body;

    if (!name || !shortDescription || !description || !officialInformationUrl || !officialApplicationUrl) {
      return res.status(400).json({
        success: false,
        message: 'Name, short description, description, official information URL, and official application URL are required.',
      });
    }

    const slug = req.body.slug || generateSlug(name);

    // Check if slug already exists
    const existing = await getSchemeByIdOrSlug(slug);
    if (existing) {
      return res.status(400).json({
        success: false,
        message: `A scheme with the slug '${slug}' already exists. Please choose a unique name or slug.`,
      });
    }

    const newScheme = await createScheme({
      name,
      slug,
      shortDescription,
      description,
      schemeType: schemeType || 'Welfare Scheme',
      governmentLevel: governmentLevel || 'Central Government',
      ministryOrDepartment: ministryOrDepartment || 'Government of India',
      categories: Array.isArray(categories) ? categories : [categories || 'students'],
      states: Array.isArray(states) && states.length > 0 ? states : ['All India'],
      beneficiaryTypes: Array.isArray(beneficiaryTypes) ? beneficiaryTypes : [],
      benefits: Array.isArray(benefits) ? benefits : [benefits || 'Financial support'],
      eligibilityRules: eligibilityRules || {},
      requiredDocuments: Array.isArray(requiredDocuments) ? requiredDocuments : ['Aadhaar Card'],
      applicationSteps: Array.isArray(applicationSteps) ? applicationSteps : [],
      applicationStartDate: applicationStartDate || 'Open',
      applicationDeadline: applicationDeadline || 'Open / As notified',
      officialInformationUrl,
      officialApplicationUrl,
      sourceVerifiedAt: sourceVerifiedAt || new Date().toISOString().split('T')[0],
      status: status || 'Active',
      isFeatured: !!isFeatured,
    });

    res.status(201).json({
      success: true,
      message: 'Scheme created successfully.',
      data: newScheme,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update existing scheme (Admin Only)
// @route   PUT /api/schemes/:identifier
export const modifyScheme = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const existing = await getSchemeByIdOrSlug(identifier);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: `Scheme '${identifier}' not found to update.`,
      });
    }

    const updated = await updateScheme(identifier, req.body);

    res.status(200).json({
      success: true,
      message: 'Scheme updated successfully.',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete scheme (Admin Only)
// @route   DELETE /api/schemes/:identifier
export const removeScheme = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const existing = await getSchemeByIdOrSlug(identifier);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: `Scheme '${identifier}' not found to delete.`,
      });
    }

    await deleteScheme(identifier);

    res.status(200).json({
      success: true,
      message: 'Scheme deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};
