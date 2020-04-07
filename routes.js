const routes = require("next-routes");

// Setup router.
module.exports = routes()
  .add("index", "/")
  .add("wp-posts", "/wp-posts")
  .add("wp-single", "/wp-posts/:slug")
  .add("mdx-posts", "/mdx-posts");
// .add("mdx", "/mdx/:slug");
