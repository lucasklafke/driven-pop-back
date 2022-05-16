import { Router } from "express";
import { login, signUp, getUserCheckoutInfos,addCheckoutInfo} from "../Controllers/authController.js";
import validateLogin from "../Middlewares/validateLogin.js";
import validateSignUp from "../Middlewares/validateSignUp.js";
import validateUserCheckoutInfos from "../Middlewares/validateCheckoutInfos.js";
import validateToken from "../Middlewares/validateToken.js"
const authRouter = Router();

authRouter.get("checkout/infos", getUserCheckoutInfos)
authRouter.post("/login", validateLogin, login);
authRouter.post("/sign-up", validateSignUp, signUp);
authRouter.post("/checkout/infos", validateUserCheckoutInfos, addCheckoutInfo)

export default authRouter;
