import React from "react";
import { useThemeUI } from "theme-ui";
import { withApollo } from "../apollo";
import { Layout } from "../components/Layout";
import { WPPostsTemplate } from "../components/WPPostsTemplate";
import { postsQuery } from "../graphql/queries/postsQuery";

const Posts = ({ posts }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;

  console.log(JSON.stringify(theme, null, 2));
  return (
    <Layout>
      <WPPostsTemplate posts={posts} title={`WP Posts`} />
    </Layout>
  );
};

Posts.getInitialProps = async (context) => {
  const { data, loading, error } = await context.apolloClient.query({
    query: postsQuery,
  });

  if (error) throw error;
  if (loading) return;

  return { posts: data?.posts?.nodes };
};

export default withApollo({ ssr: false })(Posts);
