import { loginSchema } from "../Schemas/loginSchema.js";
import validateSchema from "../Schemas/validateSchema.js";

export async function validateLogin(req, res, next) {
  if (!validateSchema(req, loginSchema)) {
    return res.sendStatus(422);
  }
  next();
}
