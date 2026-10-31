import express from 'express';
import {
  adminLogin,
  getAdminProfile,
  getDashboardStats,
  setupAdmin,
} from '../controllers/adminController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', adminLogin);
router.post('/setup', setupAdmin);
router.get('/me', verifyAdminToken, getAdminProfile);
router.get('/stats', verifyAdminToken, getDashboardStats);

export default router;
