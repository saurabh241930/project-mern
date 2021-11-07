import express from 'express';
import Marble from '../models/Marble.js';

const router = express.Router();

export const getMarblesByCategory = async(req,res) => {
    try {
        const {categoryMaterialName} = req.params;
        const marbles = await Marble.find({"qualityName":categoryMaterialName});

        res.status(200).json(marbles)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMarbles = async(req,res) => {
    try {
        const marbles = await Marble.aggregate([
            {
                $group: {
                   _id: '$angle',
                   marbles: {
                      $push: {
                          'marbleId':'$_id',
                          'qualityName': '$qualityName',
                          'basicMaterial':'$basicMaterial',
                          'description':'$description',
                          'material':'$material',
                          'blockBatchNo':'$blockBatchNo',
                          'color':'$color',
                          'image':'$image'
                      }
                   },
                   count:{$sum:1}
                }
             }
        ]);
        res.status(200).json(marbles)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMarblesMyAngles = async(req,res) => {
    try {
        const marbles = await Marble.find();
        res.status(200).json(marbles)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export default router;


