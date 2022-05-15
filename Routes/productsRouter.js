import { Router } from "express";
import { getProducts, getProduct } from "../Controllers/productsController.js";
import validateProductHandle from "../Middlewares/validateProductHandle.js";

const productRouter = Router();

productRouter.get(
  "/products/:productHandle",
  validateProductHandle,
  getProduct
);
productRouter.get("/products", getProducts);

export default productRouter;
