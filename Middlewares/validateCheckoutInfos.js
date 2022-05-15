import db from "../db.js"
import checkoutInfosSchema from "../Schemas/checkoutInfosSchema.js"
export default async function verifyUserCheckoutInfos(req,res,next){
    
    const validation = checkoutInfosSchema.validate(req.body)
    
    if(validation.error){
        return res.status(500).send(validation.error)
    }
    next()
}