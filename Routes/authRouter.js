import { Router } from "express";
import {
  login,
  signUp,
  checkout,
  getCheckouts,
} from "../Controllers/authController.js";
import validateLogin from "../Middlewares/validateLogin.js";
import validateSignUp from "../Middlewares/validateSignUp.js";

import validateToken from "../Middlewares/validateToken.js";
const authRouter = Router();

authRouter.post("/login", validateLogin, login);
authRouter.post("/sign-up", validateSignUp, signUp);
authRouter.get("/checkout", validateToken, getCheckouts);
authRouter.post("/checkout", validateUserCheckoutInfos, validateToken, checkout)

export default authRouter;
