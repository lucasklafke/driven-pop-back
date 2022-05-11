import signUpSchema from "../Schemas/signUpSchema.js"
import db from "../db.js"
export default async function validateSignUp(req,res,next){
    const {email, password, confirm_password} = req.body
    const validation = signUpSchema.validate(req.body)
    console.log(req.body)
    
    if(validation.error || password !== confirm_password){
        return res.status(500).send(validation.error)
    }

    try{
        const users = db.collection("users")

        const user = await users.findOne(email)
        if(user){ return res.status(500).send("user already registered!")}

    }catch(error){
        return res.sendStatus(500)
    }

    next()
} 