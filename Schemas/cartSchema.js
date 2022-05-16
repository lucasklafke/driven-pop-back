import joi from "joi";

export const cartSchema = joi.object({ products: joi.array().required() });
