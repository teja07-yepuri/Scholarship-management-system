import { evaluateEligibility } from '../services/eligibilityService.js';

// @desc    Evaluate rule-based eligibility for a user profile
// @route   POST /api/eligibility/check
export const checkEligibility = async (req, res, next) => {
  try {
    const {
      state,
      educationLevel,
      currentCourse,
      annualFamilyIncome,
      age,
      category,
      gender,
      occupation,
      hasDisability,
      disabilityPercentage,
    } = req.body;

    const results = await evaluateEligibility({
      state,
      educationLevel,
      currentCourse,
      annualFamilyIncome,
      age,
      category,
      gender,
      occupation,
      hasDisability,
      disabilityPercentage,
    });

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    next(error);
  }
};
