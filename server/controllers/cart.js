import Cart from "../models/Cart.js";
import User from "../models/User.js";
import mongoose from "mongoose";




export const myCart = async(req,res) => {
    try {
        const foundCart = await Cart.findOne({"ofUser":mongoose.Types.ObjectId(req.userId)}).populate("cartList")
        res.status(200).json(foundCart)
    } catch (error) {
        res.status(200).json(error)
        
    }
}

export const cartAction = async(req,res) => {
    try {
        const  {marbleId} = req.params;
        const currUser = await User.findById(req.userId)
        const foundCart = await Cart.findOne({"ofUser":currUser['_id']}) 
        if (foundCart){
            const cartList = foundCart['cartList']
            if (cartList.includes(marbleId)){

                const updatedCart = await Cart.findByIdAndUpdate(foundCart['_id'],{
                    $pull:{
                       'cartList':marbleId  
                    },
                    $set:{
                        'lastRemoved':marbleId
                    }
                 })
                 res.status(200).json(updatedCart)

            }else{
                const updatedCart = await Cart.findByIdAndUpdate(foundCart['_id'],{
                    $push:{
                        'cartList':marbleId  
                    },
                    $set:{
                        'lastAdded':marbleId
                    }
                 })
                 res.status(200).json(updatedCart)
            }
        }
        else{
            const createdCart = await Cart.create({'ofUser':mongoose.Types.ObjectId(req.userId)})
            const updatedCart = await Cart.findByIdAndUpdate(createdCart['_id'],{
                $push:{
                    'cartList':marbleId  
                },
                $set:{
                    'lastAdded':marbleId
                }
            })
            res.status(200).json(updatedCart)
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
   
}