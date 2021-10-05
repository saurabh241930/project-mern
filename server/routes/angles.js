import express from 'express';

import {getAngles} from '../controllers/angles.js'

const router = express.Router();

router.get('/',getAngles)

export default router;