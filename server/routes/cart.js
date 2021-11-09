import { cartAction,myCart } from "../controllers/cart.js";
import express from 'express';
import auth from '../middleware/authenticateJWT.js';

const router = express.Router();

router.get('/action/:marbleId',auth,cartAction)
router.get('/mycart',auth,myCart)

export default router;


