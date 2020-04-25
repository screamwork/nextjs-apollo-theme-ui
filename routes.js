const routes = require("next-routes");

// Setup router.
module.exports = routes()
  .add("index", "/")
  .add("wp-posts", "/wp-posts")
  .add("wp-single", "/wp-posts/:slug")
  .add("mdx-posts", "/mdx-posts/:page")
  .add("masonry", "/masonry")
  // disable routes because of "useFileSystemPublicRoutes: true"
  .add("404", "/wp-single");
