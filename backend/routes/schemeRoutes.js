import express from 'express';
import {
  listSchemes,
  getScheme,
  addScheme,
  modifyScheme,
  removeScheme,
} from '../controllers/schemeController.js';
import { verifyAdminToken } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', listSchemes);
router.get('/:identifier', getScheme);

// Protected Admin Routes
router.post('/', verifyAdminToken, addScheme);
router.put('/:identifier', verifyAdminToken, modifyScheme);
router.delete('/:identifier', verifyAdminToken, removeScheme);

export default router;
