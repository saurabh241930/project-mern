import express from 'express';
import auth from '../middleware/authenticateJWT.js';
import {getCategories} from '../controllers/categories.js'

const router = express.Router();

router.get('/',getCategories)

export default router;