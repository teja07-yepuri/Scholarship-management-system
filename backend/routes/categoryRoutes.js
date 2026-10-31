import express from 'express';
import { listCategories, getCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', listCategories);
router.get('/:slug', getCategory);

export default router;
