import { Router } from "express";
import { login, signUp } from "../Controllers/authController.js";
import validateLogin from "../Middlewares/validateLogin.js";
import validateSignUp from "../Middlewares/validateSignUp.js";

const authRouter = Router();
authRouter.post("/login", validateLogin, login);
authRouter.post("/sign-up", validateSignUp, signUp);

export default authRouter;
