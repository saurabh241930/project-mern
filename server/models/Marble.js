import mongoose from 'mongoose';

const marbleSchema = mongoose.Schema({
    basicMaterial: {
        type: String,
        required: true,
      },
    color:{
        type: String,
        required: true,
      },
    storageLocation:{
        type: Number,
        required: true,
    },
    qualityName:{
        type: String,
        required: true,
      },
    angle:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    material:{
        type: String,
        required: true,
    },
    blockBatchNo:{
        type: String,
        required: true,
    },

})

const Marble = mongoose.model('marbles', marbleSchema);

export default Marble;