import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await db.collection("users").findOne({ email: email });
    if (user && bcrypt.compareSync(password, user.encryptedPassword)) {
      const token = uuid();
      await db
        .collection("sessions")
        .insertOne({ user: user.email, token: token, username: user.name });
      res.status(200).send({ token: token, username: user.name });
    } else {
      console.log("User not found");
      res.sendStatus(401);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  const date = dayjs().format("DD/MM");
  const encryptedPassword = bcrypt.hashSync(password, 10);
  try {
    const users = db.collection("users");
    await users.insertOne({ name, email, encryptedPassword, date });
    res.send("user created!");
  } catch (error) {
    res.send("connection failed");
  }
}
