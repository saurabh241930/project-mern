import mongoose from 'mongoose';
import Marble from './Marble.js';

const categorySchema = mongoose.Schema({
    image: {
        type: String,
        required: true,
      },
    basicMaterial: {
        type: String,
        required: true,
      },
    colors:{
        type: Array,
        required: true,
      },
    quantity:{
        type: Number,
        required: true,
      },
    material:{
        type: String,
        required: true,
      },
    qualityName:{
        type: String,
        required: true,
      },
    marbles: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: Marble,
    },
    ]
})

const Category = mongoose.model('categories', categorySchema);

export default Category;