import express from 'express';
import {
  registerUser,
  loginUser,
  listSavedSchemes,
  bookmarkScheme,
  unbookmarkScheme,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/saved-schemes', listSavedSchemes);
router.post('/saved-schemes', bookmarkScheme);
router.delete('/saved-schemes/:slug', unbookmarkScheme);

export default router;
