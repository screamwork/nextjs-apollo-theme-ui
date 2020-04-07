import axios from "axios";
import React from "react";
import { Box, Heading, useThemeUI } from "theme-ui";
import { withApollo } from "../apollo";
import { Layout } from "./_layout";

const MdxPosts = ({ staticMdxPages }) => {
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
          backgroundColor: "white"
        }}
      >
        <Box p={5} sx={{ width: ["100%", "100%", "75%"] }}>
          <Heading as="h2" mb={3}>
            MDX Posts Page!
          </Heading>
          {staticMdxPages.map((p, index) => (
            <a
              href={`/mdx/${p}`}
              key={`${p}-${index}`}
              style={{
                textDecoration: "none",
                paddingTop: 10,
                paddingBottom: 10,
                display: "block"
              }}
            >
              <Heading as="h4" mb={0} style={{ textTransform: "capitalize" }}>
                {p}
              </Heading>
            </a>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

MdxPosts.getInitialProps = async (context) => {
  const files = await axios.get("http://localhost:8080/api/mdxposts");
  return { staticMdxPages: files.data };
};

export default withApollo({ ssr: true })(MdxPosts);
