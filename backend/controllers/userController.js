import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  getUserByEmail,
  createUser,
  getSavedSchemes,
  saveScheme,
  removeSavedScheme,
} from '../services/storageService.js';

const generateUserToken = (user) => {
  const secret = process.env.JWT_SECRET || 'super_secure_national_schemes_jwt_secret_key_2026_dev';
  return jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      role: 'citizen',
    },
    secret,
    { expiresIn: '7d' }
  );
};

// @desc    Register new user
// @route   POST /api/users/register
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, phone, state, educationLevel, category } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required.',
      });
    }

    const existing = await getUserByEmail(email);
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email address already exists.',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await createUser({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
      phone: phone ? phone.trim() : '',
      state: state || 'All India',
      educationLevel: educationLevel || 'Undergraduate',
      category: category || 'General',
    });

    const token = generateUserToken(user);

    res.status(201).json({
      success: true,
      message: 'Account registered successfully.',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        state: user.state,
        educationLevel: user.educationLevel,
        category: user.category,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    User login
// @route   POST /api/users/login
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      });
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    const token = generateUserToken(user);

    res.status(200).json({
      success: true,
      message: 'Login successful.',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        state: user.state,
        educationLevel: user.educationLevel,
        category: user.category,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user's saved schemes
// @route   GET /api/users/saved-schemes
export const listSavedSchemes = async (req, res, next) => {
  try {
    const userEmail = req.query.email || (req.user ? req.user.email : '');
    if (!userEmail) {
      return res.status(400).json({
        success: false,
        message: 'User email is required to retrieve saved schemes.',
      });
    }

    const saved = await getSavedSchemes(userEmail);
    res.status(200).json({
      success: true,
      data: saved,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Save scheme for user
// @route   POST /api/users/saved-schemes
export const bookmarkScheme = async (req, res, next) => {
  try {
    const { userEmail, schemeId, schemeSlug, schemeName, schemeType } = req.body;
    if (!userEmail || !schemeSlug) {
      return res.status(400).json({
        success: false,
        message: 'User email and scheme slug are required.',
      });
    }

    const record = await saveScheme(userEmail, {
      schemeId: schemeId || schemeSlug,
      schemeSlug,
      schemeName: schemeName || schemeSlug,
      schemeType: schemeType || 'Scholarship',
    });

    res.status(201).json({
      success: true,
      message: 'Scheme saved successfully.',
      data: record,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Remove saved scheme
// @route   DELETE /api/users/saved-schemes/:slug
export const unbookmarkScheme = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const { userEmail } = req.query;

    if (!userEmail || !slug) {
      return res.status(400).json({
        success: false,
        message: 'User email and scheme slug are required.',
      });
    }

    await removeSavedScheme(userEmail, slug);
    res.status(200).json({
      success: true,
      message: 'Scheme removed from saved list.',
    });
  } catch (error) {
    next(error);
  }
};
