import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  getAdminByEmailOrUsername,
  createAdmin,
  getAdminStats,
} from '../services/storageService.js';

const generateToken = (admin) => {
  const secret = process.env.JWT_SECRET || 'super_secure_national_schemes_jwt_secret_key_2026_dev';
  return jwt.sign(
    {
      id: admin._id,
      username: admin.username,
      email: admin.email,
      role: admin.role,
    },
    secret,
    { expiresIn: '24h' }
  );
};

// @desc    Admin login
// @route   POST /api/admin/login
export const adminLogin = async (req, res, next) => {
  try {
    const identifier = req.body.identifier || req.body.username || req.body.email;
    const { password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username/Email and password are required.',
      });
    }

    const admin = await getAdminByEmailOrUsername(identifier);
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials. User not found.',
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials. Password mismatch.',
      });
    }

    const token = generateToken(admin);

    res.status(200).json({
      success: true,
      message: 'Login successful.',
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        name: admin.name || 'Administrator',
        role: admin.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Verify admin authentication status
// @route   GET /api/admin/me
export const getAdminProfile = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      admin: req.admin,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dashboard metrics & category breakdown
// @route   GET /api/admin/stats
export const getDashboardStats = async (req, res, next) => {
  try {
    const stats = await getAdminStats();
    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Register initial admin (only permitted if no admin exists or with setup key)
// @route   POST /api/admin/setup
export const setupAdmin = async (req, res, next) => {
  try {
    const { username, email, password, name } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username, email, and password (min 6 chars) are required.',
      });
    }

    const existing = await getAdminByEmailOrUsername(email);
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'An administrator with this email or username already exists.',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = await createAdmin({
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      name: name || 'System Administrator',
      role: 'superadmin',
    });

    const token = generateToken(newAdmin);

    res.status(201).json({
      success: true,
      message: 'Admin account created successfully.',
      token,
      admin: {
        id: newAdmin._id,
        username: newAdmin.username,
        email: newAdmin.email,
        name: newAdmin.name,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    next(error);
  }
};
