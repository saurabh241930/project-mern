import mongoose from "mongoose";
import Marble from "./Marble";

const cartSchema = mongoose.Schema({
  ofUser: {
       type: String,
        unique:  true 
    },
  marbles:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: Marble
      }],
  lastAdded:{
    type: mongoose.Schema.Types.ObjectId,
    ref: Marble 
  },
  lastRemoved:{
    type: mongoose.Schema.Types.ObjectId,
    ref: Marble
  },
  createdAt:{
      type:Date,
      default:Date.now
  }


});

export default mongoose.model("Cart", cartSchema);