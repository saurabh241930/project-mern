import express from 'express';
import {AllCategories} from '../services/categories.js'
const router = express.Router();

export const getCategories = async(req,res) => {
    try {
        const categoriesInfo = await AllCategories()
        res.status(200).json(categoriesInfo)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;