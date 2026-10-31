import { getCategories, getCategoryBySlug } from '../services/storageService.js';

// @desc    Get all categories
// @route   GET /api/categories
export const listCategories = async (req, res, next) => {
  try {
    const categories = await getCategories();
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get category by slug
// @route   GET /api/categories/:slug
export const getCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const category = await getCategoryBySlug(slug);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: `Category '${slug}' not found.`,
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
