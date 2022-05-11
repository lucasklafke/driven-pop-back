import dayjs from "dayjs"
import bcrypt from "bcrypt"
import db from "../db.js"

export async function signUp(req,res){
    const { name, email, password } = req.body
    const date = dayjs().format("DD/MM")
    const encryptedPassword = bcrypt.hashSync(password, 10)
    try{
        const users = db.collection("users")
        await users.insertOne({ name, email, encryptedPassword, date})
        res.send("user created!")
    }catch(error){
        res.send("connection failed")
    }
}
