import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import authRouter from "./Routes/authRouter.js";
import getProducts from "./Controllers/productsController.js"
import validateToken from "./Middlewares/validateToken.js"


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);

app.get("/products",getProducts)

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
