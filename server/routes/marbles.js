import express from 'express';

import {getMarblesByCategory,getMarbles} from '../controllers/marbles.js'
const router = express.Router();
router.get('/:categoryMaterialName',getMarblesByCategory)
router.get('/all/anglwise',getMarbles)


export default router;