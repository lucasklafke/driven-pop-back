import db from "../db.js";
export default async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(404).send("authorization missed");
  }
  const token = authorization.replace("Bearer", "").trim();

  try {
    const sessions = db.collection("sessions");
    const session = await sessions.findOne({ token });
    if (!session) {
      return res.status(404).send("token not found");
    }
    res.locals.session = session
  } catch (error) {
    res.send("something went wrong!");
  }
  next();
}
