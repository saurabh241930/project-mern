import express from 'express';
import mongoose from 'mongoose';

import Angle from '../models/Angle.js';

const router = express.Router();

export const getAngles = async(req,res) => {
    try {
        const anglesInfo = await Angle.find();
        res.status(200).json(anglesInfo)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;