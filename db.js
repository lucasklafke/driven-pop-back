import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
let db;

const mongoClient = new MongoClient(process.env.MONGO_URL);
try {
  await mongoClient.connect();
  db = mongoClient.db(process.env.DB);
  console.log(`Connected to ${process.env.DB} mongoDB database`);
} catch (e) {
  console.log(`Failed to connect to ${process.env.DB} mongoDB database`, e);
}

export default db;
