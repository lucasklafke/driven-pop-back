import db from "../db.js"
export default async function getProducts(req,res){
    let {start} = req.query
    if (!start){
        return res.send("page not found!")
    }
    
    try{
        const products = db.collection("products")
        const arrayProducts = await products.find({}).skip(Number(200*(start-1))).limit(200).toArray()
        if(arrayProducts){    
            return res.send(arrayProducts)
        }
        res.send("nothing")
        console.log(arrayProducts)
    }catch(error){
        res.send(error)
    }
}