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
<<<<<<< HEAD
authRouter.post("/checkout", validateToken, checkout);
authRouter.get("/checkout", validateToken, getCheckouts);
=======
authRouter.post("/checkout", validateUserCheckoutInfos, validateToken, checkout)
>>>>>>> fed5a30088659d3a72f646e793b3b47cb22dbfd0

export default authRouter;
