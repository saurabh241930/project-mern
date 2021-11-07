import Cart from "../models/Cart.js";
import User from "../models/User.js";


// const cartActionHelper = (foundCart,marbleId) => {
//     const updatedCart = await Cart.findByIdAndUpdate(foundCart['_id'],{
//         $pull:{
//            'cartList':marbleId  
//         },
//         $set:{
//             'lastRemoved':marbleId
//         }
//      })
// }

export const cartAction = async(req,res) => {
    try {

        const  {marbleId} = req.params;
        const currUser = await User.findById(req.userId)
        console.log(marbleId,currUser);
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
        const createdCart = await Cart.create({'ofUser':currUser['_id']})
        const updatedCart = await Cart.findByIdAndUpdate(createdCart['_id'],{
            $push:{
                'cartList':marbleId  
            },
            $set:{
                'lastAdded':marbleId
            }
         })
         res.status(200).json("updatedCart")
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
   
}