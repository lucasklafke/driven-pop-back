import { Router } from "express";
import { login } from "../Controllers/authController.js";
import { validateLogin } from "../Middlewares/validateLogin.js";

const authRouter = Router();
authRouter.post("/login", validateLogin, login);

export default authRouter;
