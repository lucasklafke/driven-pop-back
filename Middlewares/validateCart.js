import { cartSchema } from "../Schemas/cartSchema.js";
import validateSchema from "../Schemas/validateSchema.js";

export default async function validateLogin(req, res, next) {
  if (!validateSchema(req, cartSchema)) {
    return res.sendStatus(422);
  }
  next();
}
