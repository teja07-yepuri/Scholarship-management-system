import { getSchemes } from './storageService.js';

/**
 * Rule-Based Eligibility Evaluator
 * Evaluates user profile against database scheme criteria without any external AI or third-party APIs.
 */
export const evaluateEligibility = async (userProfile) => {
  if (!userProfile || typeof userProfile !== 'object') {
    throw new Error('User profile is required for eligibility evaluation.');
  }

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
  } = userProfile;

  // Validation: Age if supplied must be between 0 and 120
  const parsedAge = age !== undefined && age !== null && age !== '' ? Number(age) : null;
  if (parsedAge !== null && (isNaN(parsedAge) || parsedAge < 0 || parsedAge > 120)) {
    throw new Error('Please enter a valid age between 0 and 120 years.');
  }

  // Validation: Income if supplied must be a non-negative number
  const parsedIncome =
    annualFamilyIncome !== undefined && annualFamilyIncome !== null && annualFamilyIncome !== ''
      ? Number(annualFamilyIncome)
      : null;
  if (parsedIncome !== null && (isNaN(parsedIncome) || parsedIncome < 0)) {
    throw new Error('Please enter a valid non-negative annual family income in INR.');
  }

  // Retrieve all active schemes from the database
  const { schemes } = await getSchemes({ status: 'Active', limit: 100 });

  if (!schemes || schemes.length === 0) {
    return {
      submittedProfile: userProfile,
      evaluatedCount: 0,
      matchedCount: 0,
      potentiallyEligible: [],
      nearMatches: [],
      disclaimer: 'No active schemes are currently loaded in the database.',
    };
  }

  const matchedSchemes = [];
  const nearMatchSchemes = [];

  for (const scheme of schemes) {
    const rules = scheme.eligibilityRules || {};
    const matchReasons = [];
    const pendingVerificationNotes = [];
    let isEligible = true;
    let failedConditions = 0;

    // 1. Geographic State Check
    if (scheme.states && scheme.states.length > 0) {
      const isAllIndia = scheme.states.some((s) => s.toLowerCase() === 'all india');
      if (isAllIndia) {
        matchReasons.push('Open to citizens across all Indian states and Union Territories.');
      } else if (state && state.toLowerCase() !== 'all india') {
        const matchesState = scheme.states.some(
          (st) => st.toLowerCase() === state.toLowerCase()
        );
        if (matchesState) {
          matchReasons.push(`Eligible for residents of ${state}.`);
        } else {
          isEligible = false;
          failedConditions++;
        }
      } else {
        // User selected 'All India' while exploring state-specific schemes
        pendingVerificationNotes.push(
          `Requires state domicile / residency in: ${scheme.states.join(', ')}.`
        );
      }
    }

    // 2. Age Criteria Check
    if (parsedAge !== null) {
      const minAge = rules.minAge ?? 0;
      const maxAge = rules.maxAge ?? 120;
      if (parsedAge >= minAge && parsedAge <= maxAge) {
        matchReasons.push(
          `Your age (${parsedAge} yrs) falls within the required bracket (${minAge} - ${maxAge} yrs).`
        );
      } else {
        isEligible = false;
        failedConditions++;
      }
    } else {
      pendingVerificationNotes.push(
        `Age eligibility (${rules.minAge ?? 0} to ${rules.maxAge ?? 120} years) will be verified from birth certificate / Aadhaar.`
      );
    }

    // 3. Annual Family Income Ceiling Check
    if (rules.maxFamilyIncome !== null && rules.maxFamilyIncome !== undefined) {
      if (parsedIncome !== null) {
        if (parsedIncome <= rules.maxFamilyIncome) {
          matchReasons.push(
            `Annual family income (₹${parsedIncome.toLocaleString('en-IN')}) is within the scheme ceiling of ₹${rules.maxFamilyIncome.toLocaleString('en-IN')}.`
          );
        } else {
          isEligible = false;
          failedConditions++;
        }
      } else {
        pendingVerificationNotes.push(
          `Income ceiling requirement (maximum ₹${rules.maxFamilyIncome.toLocaleString('en-IN')}/year) needs verification via state income certificate.`
        );
      }
    } else {
      matchReasons.push('No strict family income ceiling specified for this scheme.');
    }

    // 4. Social Category / Caste Check
    if (rules.applicableCategories && rules.applicableCategories.length > 0) {
      const allowsAllCategories = rules.applicableCategories.some(
        (c) => c.toLowerCase() === 'all'
      );
      if (!allowsAllCategories) {
        if (category && category.toLowerCase() !== 'all') {
          const catMatches = rules.applicableCategories.some(
            (c) => c.toLowerCase() === category.toLowerCase()
          );
          if (catMatches) {
            matchReasons.push(`Category '${category}' is explicitly covered by this scheme.`);
          } else {
            isEligible = false;
            failedConditions++;
          }
        } else {
          pendingVerificationNotes.push(
            `Applies specifically to ${rules.applicableCategories.join(', ')} categories. Confirm your category certificate.`
          );
        }
      } else {
        matchReasons.push('Available to applicants from all social categories.');
      }
    }

    // 5. Gender Check
    if (rules.gender && rules.gender.toLowerCase() !== 'all') {
      if (gender && gender.toLowerCase() !== 'all') {
        if (rules.gender.toLowerCase() === gender.toLowerCase()) {
          matchReasons.push(`Scheme targets ${rules.gender} beneficiaries.`);
        } else {
          isEligible = false;
          failedConditions++;
        }
      } else {
        pendingVerificationNotes.push(`Reserved exclusively for ${rules.gender} candidates.`);
      }
    }

    // 6. Education Level Check
    if (rules.educationLevels && rules.educationLevels.length > 0) {
      const allowsAnyEdu = rules.educationLevels.some(
        (lvl) => lvl.toLowerCase() === 'any'
      );
      if (!allowsAnyEdu) {
        if (educationLevel && educationLevel.toLowerCase() !== 'all') {
          const eduMatches = rules.educationLevels.some(
            (lvl) => lvl.toLowerCase() === educationLevel.toLowerCase()
          );
          if (eduMatches) {
            matchReasons.push(`Matches your education level (${educationLevel}).`);
          } else {
            isEligible = false;
            failedConditions++;
          }
        } else {
          pendingVerificationNotes.push(
            `Applicable education levels: ${rules.educationLevels.join(', ')}.`
          );
        }
      }
    }

    // 7. Occupation Check
    if (rules.occupations && rules.occupations.length > 0) {
      const allowsAnyOcc = rules.occupations.some(
        (o) => o.toLowerCase() === 'any'
      );
      if (!allowsAnyOcc) {
        if (occupation && occupation.toLowerCase() !== 'any' && occupation.toLowerCase() !== 'all') {
          const occMatches = rules.occupations.some(
            (o) => o.toLowerCase() === occupation.toLowerCase()
          );
          if (occMatches) {
            matchReasons.push(`Targeted towards your occupation: ${occupation}.`);
          } else {
            isEligible = false;
            failedConditions++;
          }
        } else {
          pendingVerificationNotes.push(
            `Intended for beneficiaries working as: ${rules.occupations.join(', ')}.`
          );
        }
      }
    }

    // 8. Disability Requirement Check
    if (rules.disabilityOnly) {
      const userHasDisability = hasDisability === true || hasDisability === 'true';
      if (userHasDisability) {
        const userDisabilityPct = disabilityPercentage ? Number(disabilityPercentage) : 40;
        const requiredPct = rules.minimumDisabilityPercentage || 40;
        if (userDisabilityPct >= requiredPct) {
          matchReasons.push(
            `Meets benchmark disability criteria (≥ ${requiredPct}% disability).`
          );
        } else {
          isEligible = false;
          failedConditions++;
        }
      } else if (hasDisability === false || hasDisability === 'false') {
        isEligible = false;
        failedConditions++;
      } else {
        pendingVerificationNotes.push(
          `Requires valid UDID / Disability certificate with minimum ${rules.minimumDisabilityPercentage || 40}% disability.`
        );
      }
    }

    // Incorporate scheme's specific conditions
    if (rules.additionalConditions && rules.additionalConditions.length > 0) {
      rules.additionalConditions.forEach((cond) => {
        pendingVerificationNotes.push(cond);
      });
    }

    if (isEligible) {
      matchedSchemes.push({
        scheme,
        matchReasons: matchReasons.length > 0 ? matchReasons : ['Matches general eligibility criteria.'],
        pendingVerificationNotes,
        confidence: matchReasons.length >= 3 ? 'High' : 'Moderate',
      });
    } else if (failedConditions === 1) {
      // Near match (only 1 condition failed)
      nearMatchSchemes.push({
        scheme,
        matchReasons,
        pendingVerificationNotes,
        confidence: 'Partial Match',
      });
    }
  }

  return {
    submittedProfile: userProfile,
    evaluatedCount: schemes.length,
    matchedCount: matchedSchemes.length,
    potentiallyEligible: matchedSchemes,
    nearMatches: nearMatchSchemes.slice(0, 4),
    disclaimer:
      'This eligibility evaluation is based on rule matching against verified scheme guidelines. Final eligibility, approval, and disbursement are subject to institutional verification by the competent Government Authority upon formal application.',
  };
};
