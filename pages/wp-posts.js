import React from "react";
import { useThemeUI } from "theme-ui";
import { withApollo } from "../apollo";
import { PostsTemplate } from "../components/postsTemplate";
import { postsQuery } from "../graphql/queries/postsQuery";
import { Layout } from "./_layout";

const Posts = ({ posts }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;

  console.log(JSON.stringify(theme, null, 2));
  return (
    <Layout>
      <PostsTemplate posts={posts} />
    </Layout>
  );
};

Posts.getInitialProps = async (context) => {
  const { data, loading, error } = await context.apolloClient.query({
    query: postsQuery
  });

  if (error) throw error;
  if (loading) return;

  return { posts: data?.posts?.nodes };
};

export default withApollo({ ssr: false })(Posts);
