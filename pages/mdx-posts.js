import axios from "axios";
import React from "react";
import { FaCalendarTimes } from "react-icons/fa";
import { Box, Heading, Text, useThemeUI } from "theme-ui";
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
        <Box
          p={5}
          sx={{ width: ["100%", "100%", "75%"] }}
          mb={[
            `${theme.space[2]}px`,
            `${theme.space[2]}px`,
            `${theme.space[4]}px`,
            `${theme.space[4]}px`,
          ]}
        >
          <Heading as="h2" my={4}>
            MDX Posts Page!
          </Heading>
          {data.map((p, index) => (
            <Box
              key={`${p.slug}-${index}`}
              sx={{
                display: "flex",
                flexDirection: ["column", "column", "column", "column"],
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
              mb={[
                `${theme.space[3]}px`,
                `${theme.space[3]}px`,
                `${theme.space[3]}px`,
                `${theme.space[3]}px`,
              ]}
            >
              <Heading as="h5" mb={3} sx={{ color: "grey" }}>
                <FaCalendarTimes
                  size={`.9em`}
                  color={"grey"}
                  style={{ marginRight: "7px" }}
                />
                {`${p.date}`}
              </Heading>
              <Box>
                <Heading as="h3" mb={2} style={{ textTransform: "capitalize" }}>
                  <a
                    href={`/mdx/${p.slug}`}
                    style={{
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {`${p.title}`}
                  </a>
                </Heading>
                <Text mb={[2, 2, 4, 4]}>{`${p.description}`}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

MdxPosts.getInitialProps = async (context) => {
  const { data } = await axios.get(
    `${process.env.SERVER_URL}/api/rest/mdxposts`
  );

  return {
    data,
    fallback: false,
  };
};

export default withApollo({ ssr: true })(MdxPosts);
