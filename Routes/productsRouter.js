import { Router } from "express";
import {
  getProducts,
  getProduct,
  addToCart,
  getCart,
} from "../Controllers/productsController.js";
import validateProductHandle from "../Middlewares/validateProductHandle.js";
import validateToken from "../Middlewares/validateToken.js";
import validateCart from "../Middlewares/validateCart.js";

const productRouter = Router();

productRouter.get(
  "/products/:productHandle",
  validateProductHandle,
  getProduct
);
productRouter.get("/products", getProducts);

productRouter.put("/cart", validateToken, validateCart, addToCart);

productRouter.get("/cart", validateToken, getCart);

export default productRouter;
