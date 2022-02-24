import Redis from "ioredis";

const redis = new Redis(process.env.DATABASE_URL);

export default redis;

let obj = {
    imageSrc: "https://assets.mybrightsites.com/uploads/website/product_image/image/10-02-2019/4721599/small_TSOW2020YZZ_RockTheRoyalHoodie0028.jpg",
    imageAlt: "Rock the Royal Hoodie",
    price: "$25.00",
    id: 8
}
