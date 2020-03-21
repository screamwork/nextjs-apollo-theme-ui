import moment from "moment-timezone";
import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Box, Heading, Text, useThemeUI } from "theme-ui";
import { withApollo } from "../apollo";
import { postQuery } from "../graphql/queries/postQuery";
import { Layout } from "./_layout";

const Single = ({ post }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  console.log(JSON.stringify(theme, null, 2));

  const isMdx = (post) => {
    if (!post?.tags?.nodes?.length) {
      return;
    }
    const found = post.tags.nodes.find((item) => item.slug === "mdx");
    if (found) return true;
    else return false;
  };

  return (
    <Layout>
      <Box
        className="single-post"
        mt={theme.space[6]}
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <Box p={4} sx={{ width: ["100%", "100%", "75%"], maxWidth: "100%" }}>
          <Heading
            as="h2"
            mb={2}
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
            <ReactMarkdown source={Test} skipHtml={true} />
          ) : (
            <Box
              className="wp-content"
              pt={3}
              pb={6}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

Single.getInitialProps = async (context) => {
  const slug = context.query.slug;
  const { data, loading, error } = await context.apolloClient.query({
    query: postQuery,
    variables: { slug }
  });

  if (error) throw error;
  if (loading) return;

  return { post: data?.postBy };
};

export default withApollo({ ssr: false })(Single);
