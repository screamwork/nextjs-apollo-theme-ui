// @ts-check
import moment from "moment-timezone";
import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Box, Heading, Text, useThemeUI } from "theme-ui";
import { createApolloClient } from "../../apolloClient";
import { Layout } from "../../components/Layout";
import { postQuery } from "../../graphql/queries/postQuery";
import { postsQuery } from "../../graphql/queries/postsQuery";

const Single = ({ post }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  // console.log(JSON.stringify(theme, null, 2));

  const isMdx = (post) => {
    if (!post?.tags?.nodes?.length) {
      return;
    }
    return post.tags.nodes.find((item) => {
      console.log(item);
      return item.slug === "mdx";
    });
  };

  return (
    <Layout>
      <Box
        className="single-post"
        mt={70}
        py={[4, 4, 5, 5]}
        px={[1, 2, 0, 0]}
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Box
          p={[2, 3, 0]}
          sx={{ width: ["100%", "100%", "50%"], maxWidth: "100%" }}
        >
          <Heading
            as="h2"
            mb={0}
            sx={{ textTransform: "capitalize", fontSize: theme.fontSizes[6] }}
          >
            {post.title}
          </Heading>
          <Box
            mb={4}
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <FaCalendarPlus size={`1em`} color={"#444"} />
            <Text ml={2}>{moment(post.date).format("YYYY/MM/DD")}</Text>
          </Box>
          {post?.featuredImage?.sourceUrl && (
            <img src={post.featuredImage.sourceUrl} height="150" />
          )}
          {isMdx(post) ? (
            <ReactMarkdown source={post.content} skipHtml={false} />
          ) : (
            <Box
              className="wp-content"
              pt={3}
              pb={4}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { data, loading, errors } = await createApolloClient().query({
    query: postsQuery,
  });

  if (errors) throw errors;
  if (loading) return;

  const paths = data.posts.nodes.map((p) => ({
    params: {
      slug: p.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // console.log(context);
  const { slug } = context.params;

  const { data, loading, errors } = await createApolloClient().query({
    query: postQuery,
    variables: { slug },
  });

  if (errors) throw errors;
  if (loading) return;

  return {
    props: {
      post: data?.postBy,
    },
  };
};

export default Single;
