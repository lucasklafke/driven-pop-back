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

export async function checkout(req,res){
  const {products,userInfos} = req.body
  if(!products){
    return res.send("missing products")
  }
  const date = dayjs().format("DD/MM/YYYY")
  const {user, _id} = res.locals.session
  let amount = 0
  products.forEach(product => {
    amount += Number(product.price)
  })

  const checkout = {
    sessionId:_id,
    amount,
    products,
    user,
    date,
  }

  try{
    const checkouts = db.collection("checkouts")
    const response = await checkouts.insertOne(checkout)
    console.log(response)
    res.send("purchase made")
  }catch(error){
    res.status(500).send(error)
  }
}

export  async function getUserCheckoutInfos(req, res) {
  const session = res.locals.session
  const {user} = session.user 

  if (!user){
    return res.send("user not found")
  }
  try {
    const users = db.collection("users")
    const user = users.findOne({ email: user })

    if (!(user.checkoutInfos)) {
      return res.status(500).send("checkout infos not found")
    }
    res.send(user.checkoutInfos)
  } catch (error) {
      res.send(error)
  }
}

export async function addCheckoutInfo(req,res){
  const {infos} = req.body
  const session = res.locals.session
  const sessionToken = session.token
  try{

    const checkoutsCollection = db.collection("checkouts")
    await checkoutsCollection.insertOne({sessionToken,infos})
    res.send("infos added")
  }catch(error){
    res.send(error)
  }
}