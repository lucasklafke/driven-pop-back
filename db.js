import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()
let db;

const mongoClient = new MongoClient(process.env.MONGO_URL)
try {
    await mongoClient.connect()
    db = mongoClient.db("drivenPop")
    console.log("conexão estabelecida")
} catch (e) {
    console.log("erro ao conectar", e)
}

export default db 