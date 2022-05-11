import joi from "joi"

const signUpSchema = joi.object({
    Name: joi.string().required().max(30),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    confirm_password: joi.ref("password")
}).with("password","confirm_pasword")

export default signUpSchema