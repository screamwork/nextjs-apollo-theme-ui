import axios from "axios";
import React from "react";
import { Box, Heading, useThemeUI } from "theme-ui";
import { withApollo } from "../apollo";
import { Layout } from "../components/Layout";

const MdxPosts = ({ data }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;

  return (
    <Layout>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Box p={5} sx={{ width: ["100%", "100%", "75%"] }}>
          <Heading as="h2" mb={3}>
            MDX Posts Page!
          </Heading>
          {data.map((p, index) => (
            <a
              href={`/mdx/${p.slug}`}
              key={`${p.slug}-${index}`}
              style={{
                textDecoration: "none",
                paddingTop: `${theme.space[2]}px`,
                paddingBottom: `${theme.space[2]}px`,
                display: "block",
              }}
            >
              <Heading as="h4" mb={0} style={{ textTransform: "capitalize" }}>
                {`[${p.date}] ${p.title} - ${p.description}`}
              </Heading>
            </a>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

MdxPosts.getInitialProps = async (context) => {
  const { data } = await axios.get(`${process.env.SERVER_URL}/api/mdxposts`);

  return {
    data,
    fallback: false,
  };
};

export default withApollo({ ssr: true })(MdxPosts);
