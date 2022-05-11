import signUpSchema from "../Schemas/signUpSchema.js"

export default async function validateSignUp(req,res,next){
    const validation = signUpSchema.validate(req.body)
    console.log(req.body)
    
    if(validation.error){
        console.log(validation.error)
        return res.status(500).send(validation.error)
    }
    next()
} 