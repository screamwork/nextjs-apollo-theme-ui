const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["mdx", "js", "jsx", "md"],
  // useFileSystemPublicRoutes: false,
  target: "server",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
  env: {
    lastfmUser: "#",
    lastfmApiKey: "#",
    lastfmCount: 10,
    gitUser: "#",
    socialTwitter: "#",
    socialYoutube: "#",
    socialFacebook: "#",
    socialInstagram: "#",
    socialBitbucket: "#",
    socialGithub: "#",
  },
};

module.exports = withPlugins([withMDX, withSass, withImages], nextConfig);
