import db from "../db.js";
export async function getProducts(req, res) {
  let { start } = req.query;
  if (!start) {
    return res.send("page not found!");
  }

  try {
    const products = db.collection("products");
    const arrayProducts = await products
      .find({})
      .skip(Number(200 * (start - 1)))
      .limit(200)
      .toArray();
    if (arrayProducts) {
      return res.send(arrayProducts);
    }
    res.send("nothing");
    console.log(arrayProducts);
  } catch (error) {
    res.send(error);
  }
}

export async function getProduct(req, res) {
  let handle = req.params.productHandle;
  handle = handle.toLowerCase();
  try {
    const product = await db
      .collection("products")
      .find({ handle: handle })
      .toArray();
    if (product.length === 0) return res.sendStatus(404);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function addToCart(req, res) {
  const { authorization } = req.headers;
  const { products } = req.body;
  const token = authorization.replace("Bearer", "").trim();
  try {
    const session = db.collection("sessions");
    await session.updateOne({ token: token }, { $set: { cart: products } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getCart(req, res) {
  const { authorization } = req.headers;
  const token = authorization.replace("Bearer", "").trim();
  try {
    const session = db.collection("sessions");
    const products = await session.findOne({ token: token });
    res.send(products.cart);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
