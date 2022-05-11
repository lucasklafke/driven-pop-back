import express from "express"

import validateSignUp from "../Middlewares/validateSignUp.js"
import { signUp } from "../Controllers/authController.js"

const authRouter = express.Router()

authRouter.post("/sign-up", validateSignUp, signUp)

export default authRouter