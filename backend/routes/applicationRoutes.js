import express from 'express';
import {
  submitApplication,
  trackApplication,
  listApplications,
  changeApplicationStatus,
  getStats,
} from '../controllers/applicationController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Public routes for student portal
router.post('/', submitApplication);
router.get('/track/:query', trackApplication);
router.get('/stats', getStats);

// Protected routes for admin portal
router.get('/', verifyAdminToken, listApplications);
router.put('/:id/status', verifyAdminToken, changeApplicationStatus);

export default router;
