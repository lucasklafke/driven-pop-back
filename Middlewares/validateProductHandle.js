import { productHandle } from "../Schemas/productHandleSchema.js";

export default async function validateProductHandle(req, res, next) {
  const validation = productHandle.validate(req.params.productHandle);

  if (validation.error) {
    console.log(validation.error.details);
    return res.sendStatus(422);
  } else {
    next();
  }
}
