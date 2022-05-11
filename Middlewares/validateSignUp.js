import signUpSchema from "../Schemas/signUpSchema.js"

function validateSignUp(req,res,next){
    const validation = signUpSchema.validate(req.body)
    
    if(validation.error){
        console.log(validation.error)
        return res.status(500).send(validation.error)
    }

}