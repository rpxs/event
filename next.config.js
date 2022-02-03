const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "cdn.discordapp.com"],
  },
});
