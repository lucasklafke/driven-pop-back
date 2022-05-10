import express from "express"
import cors from "cors"
import joi from "joi"
import dotenv from "dotenv"
import db from "db.js";

const app = express()

dotenv.config()

app.listen(process.env.PORT)