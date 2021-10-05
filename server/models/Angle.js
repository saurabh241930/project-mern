import mongoose from 'mongoose';

const angleSchema = mongoose.Schema({
    BOM: String,
    image: String,
    basicMaterial: String,
    blockBatchNo:String,
    colour:String,
    countOfBatch:String,
    customId:String,
    hangerAndAngle:String,
    material:String,
    materialDescription:String,
    plant:String,
    qualityName:String,
    sLoc:String,
    sumOfUnrestricted:String
})

const Angle = mongoose.model('angles', angleSchema);

export default Angle;