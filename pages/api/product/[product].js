import redis from "../../../lib/redis";
export default async function handler(req, res) {
  const { product } = req.query;
  let nx = new Number(product);
  let qx = await redis.hget("products", nx);
  if (qx) {
    res.status(200).json(qx);
  } else res.status(404).json({ error: "this product does NOT exist." });
}