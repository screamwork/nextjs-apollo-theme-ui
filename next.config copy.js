const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
module.exports = withMDX({
  pageExtensions: ["mdx", "js", "jsx", "md"],
  // useFileSystemPublicRoutes: false,
  target: "server",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }
    return config;
  },
  env: {}
});
