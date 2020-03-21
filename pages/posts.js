import moment from "moment-timezone";
import Link from "next/link";
import React from "react";
import { Box, Heading, Text, useThemeUI } from "theme-ui";
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
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white"
        }}
      >
        <Box p={5}>
          <Heading as="h2" mb={3}>
            Our Posts Page!
          </Heading>
          {posts.map((p, index) => (
            <Link href={`/posts/${p.slug}`} key={`${p.slug}-${index}`}>
              <a
                style={{
                  textDecoration: "none",
                  paddingTop: 10,
                  paddingBottom: 10,
                  display: "block"
                }}
              >
                <Heading as="h3" mb={0} style={{ textTransform: "capitalize" }}>
                  {p.title}
                </Heading>
                <Text sx={{ fontSize: theme.fontSizes[0] }}>
                  {moment(p.date).format("YYYY-MM-DD")}
                </Text>
              </a>
            </Link>
          ))}
        </Box>
      </Box>
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
