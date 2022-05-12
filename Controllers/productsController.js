import db from "../db.js"
export default async function getProducts(req,res){
    // const {page} = req.query
    

    try{
        const products = db.collection("products")
        const arrayProducts = await products.find({}).limit(10).toArray()
        if(arrayProducts){    
            return res.send(arrayProducts)
        }
        res.send("nothing")
        console.log(arrayProducts)
    }catch(error){
        res.send(error)
    }
}