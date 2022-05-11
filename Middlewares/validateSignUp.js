import signUpSchema from "../Schemas/signUpSchema.js"
import db from "../db.js"
export default async function validateSignUp(req,res,next){
    const {email} = req.body
    const validation = signUpSchema.validate(req.body)
    
    if(validation.error){
        return res.status(500).send("validation",validation.error)
    }
    try{
        const users = db.collection("users")

        const user = await users.findOne({email})
        console.log("user",user)
        if(user){ return res.status(409).send("user already registered!")}

    }catch(error){
        return res.status(500).send("connection failed")
    }
    next()
} 