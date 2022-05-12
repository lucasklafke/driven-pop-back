import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
let db;

const mongoClient = new MongoClient(process.env.MONGO_URL);
try {
  await mongoClient.connect();
  db = mongoClient.db("drivenPop");
  console.log("Connected to drivenPop mongoDB database");
} catch (e) {
  console.log("Failed to connect to drivenPop mongoDB database", e);
}

export default db;
