import joi from "joi"

const signUpSchema = joi.object({
    Name: joi.required().string().max(30),
    email: joi.required().email(),
    password: joi.required().email().min(6),
    confirm_password: joi.ref("password")
}).with("password","confirm_pasword")

export default signUpSchema