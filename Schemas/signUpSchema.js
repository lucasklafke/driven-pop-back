import joi from "joi"

const signUpSchema = joi.object({
    name: joi.string().required().max(30),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    confirm_password: joi.ref("password")
}).with("password","confirm_password")

export default signUpSchema