import dayjs from "dayjs"

import db from "../db.js"

export async function signUp(req,res){
    const { name, email, password } = req.body
    console.log(dayjs("DD/MM"))
    try{
        const users = db.collection("users")
        users.insertOne()
    }catch(error){
        res.send(error)
    }
}
