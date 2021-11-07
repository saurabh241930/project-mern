import { cartAction } from "../controllers/cart.js";
import express from 'express';
import auth from '../middleware/authenticateJWT.js';

const router = express.Router();

router.get('/action/:marbleId',auth,cartAction)

export default router;


