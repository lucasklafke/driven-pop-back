import db from "../db.js"
import checkoutInfosSchema from "../Schemas/checkoutInfosSchema.js"
export default async function validateUserCheckoutInfos(req,res,next){
    const { checkoutData } = req.body
    const validation = checkoutInfosSchema.validate(req.body)
    
    if(validation.error){
        console.log(validation.error)
        return res.status(500).send(validation.error.message)
    }
    next()
}