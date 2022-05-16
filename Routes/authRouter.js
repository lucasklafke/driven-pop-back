import { Router } from "express";
import { login, signUp, checkout } from "../Controllers/authController.js";
import validateLogin from "../Middlewares/validateLogin.js";
import validateSignUp from "../Middlewares/validateSignUp.js";
import validateUserCheckoutInfos from "../Middlewares/validateCheckoutInfos.js";
import validateToken from "../Middlewares/validateToken.js"
const authRouter = Router();

authRouter.post("/login", validateLogin, login);
authRouter.post("/sign-up", validateSignUp, signUp);
authRouter.post("/checkout", validateToken, checkout)

export default authRouter;
