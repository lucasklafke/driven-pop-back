import express from "express"
import cors from "cors"
import joi from "joi"
import dotenv from "dotenv"
import db from "./db.js";

import authRouter from "./Routes/authRouter.js";

const app = express()
dotenv.config()



app.use(json())
app.use(cors())
app.use(authRouter())

app.listen(process.env.PORT)