import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import dayjs from "dayjs";

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

export async function checkout(req, res) {
  const { products, userInfos } = req.body;
  if (!products) {
    return res.send("missing products");
  }
  const date = dayjs().format("DD/MM/YYYY");
  const { user, _id } = res.locals.session;
  console.log(products);
  let amount = 0;
  products.forEach((product) => {
    const newPrice = product.price.replace("R$", "").split(",");
    amount += Number(newPrice[0]) * Number(product.quantity);
  });

  const checkout = {
    sessionId: _id,
    amount,
    products,
    user,
    userInfos,
    date,
  };

  try {
    const checkouts = db.collection("checkouts");
    const response = await checkouts.insertOne(checkout);
    console.log(response);
    res.send("purchase made");
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getCheckouts(req, res) {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer", "").trim();
  try {
    const user = await db.collection("sessions").findOne({ token: token });
    const checkouts = await db
      .collection("checkouts")
      .find({ user: user.user })
      .toArray();
    res.send(checkouts);
  } catch (error) {
    res.sendStatus(500);
  }
}
