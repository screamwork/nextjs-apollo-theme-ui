const routes = require("next-routes");

// Setup router.
module.exports = routes()
  .add("index", "/")
  .add("posts")
  .add("single", "/posts/:slug")
  .add("mdxposts")
  .add("mdx", "/mdx/:slug");