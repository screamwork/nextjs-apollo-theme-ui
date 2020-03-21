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
  env: {
    lastfmUser: "gung",
    lastfmApiKey: "216ba84a21b975f2873c68cee721a0b1",
    lastfmCount: 10,
    gitUser: "screamwork",
    socialTwitter: "https://twitter.com/gu_ng",
    socialYoutube: "https://www.youtube.com/channel/UC9elwy5eDAqjavqxUS_RgqQ",
    socialFacebook: "https://www.facebook.com/abugung/",
    socialInstagram: "https://www.instagram.com/_.gung._/"
  }
});
