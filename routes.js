const routes = require("next-routes");

// Setup router.
module.exports = routes()
  .add("index", "/")
  .add("posts", "/posts")
  .add("single", "/posts/:slug")
  .add("mdxposts", "/mdxposts")
  .add("mdx", "/mdx/:slug");
