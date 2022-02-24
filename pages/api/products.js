import redis from "../../lib/redis";
export default async (req, res) => {
  res
    .status(200)
    .json(
      await redis
        .hvals("products")
        .then((arr) => arr.map((x) => new Object(JSON.parse(x))))
    );
};