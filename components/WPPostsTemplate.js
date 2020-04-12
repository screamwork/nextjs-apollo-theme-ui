import moment from "moment-timezone";
import React from "react";
import { Box, Flex, Heading, Text, useThemeUI } from "theme-ui";

export const WPPostsTemplate = ({ posts, title }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const first = posts[0];
  const second = posts[1];

  return (
    <Flex
      className="postTemplate"
      pt={[theme.space[4], theme.space[5], theme.space[6]]}
      pb={5}
      mt={[70, 86, 86]}
      sx={{
        flex: 1,
        minHeight: "100vh",
        backgroundColor: "whitesmoke",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading
        my={theme.space[4]}
        as="h2"
        sx={{ fontSize: theme.fontSizes[6] }}
      >
        {title}
      </Heading>
      <Box sx={{ width: ["100%", "100%", "75%"] }}>
        <Flex sx={{ flexDirection: ["column", "column", "row"] }}>
          <Box sx={{ flex: 1 }}>
            <Box
              className="box"
              className="left"
              p={[1, 2, 4]}
              sx={{
                "borderLeftWidth": "3px",
                "borderLeftStyle": "solid",
                "borderLeftColor": "transparent",
                "&:hover": {
                  borderLeftColor: `${theme.colors.primary}`,
                },
              }}
            >
              <a href={`/wp-posts/${first.slug}`}>
                <Heading
                  as="h4"
                  sx={{
                    textTransform: "capitalize",
                    color: "#444",
                    textDecoration: "inherit",
                    fontSize: theme.fontSizes[4],
                  }}
                >
                  {first.title}
                </Heading>
              </a>
              <Text sx={{ fontSize: theme.fontSizes[0], marginBottom: 10 }}>
                {moment(first.date).format("YYYY/MM/DD")}
              </Text>
              {first.featuredImage.sourceUrl && (
                <img
                  src={first.featuredImage.sourceUrl}
                  style={{ maxWidth: "100%" }}
                />
              )}
              <Text
                dangerouslySetInnerHTML={{ __html: first.excerpt }}
                sx={{ fontSize: theme.fontSizes[2] }}
              />
            </Box>
            <Box
              className="box"
              className="left"
              mt={2}
              p={[1, 2, 4]}
              sx={{
                "flex": 1,
                "borderLeftWidth": "3px",
                "borderLeftStyle": "solid",
                "borderLeftColor": "transparent",
                "&:hover": {
                  borderLeftColor: `${theme.colors.primary}`,
                },
              }}
            >
              <a href={`/wp-posts/${second.slug}`}>
                <Heading
                  as="h4"
                  sx={{
                    textTransform: "capitalize",
                    color: "#444",
                    textDecoration: "inherit",
                    fontSize: theme.fontSizes[4],
                  }}
                >
                  {second.title}
                </Heading>
              </a>
              <Text sx={{ fontSize: theme.fontSizes[0], marginBottom: 10 }}>
                {moment(second.date).format("YYYY/MM/DD")}
              </Text>
              {second.featuredImage.sourceUrl && (
                <img
                  src={second.featuredImage.sourceUrl}
                  style={{ maxWidth: "100%" }}
                />
              )}
              <Text
                dangerouslySetInnerHTML={{ __html: second.excerpt }}
                sx={{ fontSize: theme.fontSizes[2] }}
              />
            </Box>
          </Box>
          <Box className="right" sx={{ flex: 1 }}>
            {posts.map((p, idx) => {
              if (idx === 0 || idx === 1 || idx >= 8) {
                return;
              }
              return (
                <Box
                  // mb={[10, 10, 10]}
                  p={[1, 2, 4]}
                  key={p.postId}
                  sx={{
                    "flex": 1,
                    "borderLeftWidth": "3px",
                    "borderLeftStyle": "solid",
                    "borderLeftColor": "transparent",
                    "&:hover": {
                      borderLeftColor: `${theme.colors.primary}`,
                    },
                  }}
                >
                  <Box
                    className={`box`}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {p?.featuredImage?.sourceUrl && (
                      <img
                        src={p.featuredImage.sourceUrl}
                        style={{
                          objectFit: "cover",
                          width: `${150}px`,
                          height: `${100}px`,
                          maxWidth: "100%",
                        }}
                      />
                    )}
                    <Box ml={[1, 1, 3]}>
                      <a href={`/wp-posts/${p.slug}`}>
                        <Heading
                          as="h4"
                          sx={{
                            textTransform: "capitalize",
                            color: "#444",
                            textDecoration: "inherit",
                            fontSize: theme.fontSizes[4],
                          }}
                        >
                          {p.title}
                        </Heading>
                      </a>
                      <Text sx={{ fontSize: theme.fontSizes[0] }}>
                        {moment(p.date).format("YYYY/MM/DD")}
                      </Text>
                      <Text
                        dangerouslySetInnerHTML={{ __html: p.excerpt }}
                        sx={{ fontSize: theme.fontSizes[2] }}
                        mt={theme.space[0]}
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Box>
      <style jsx>{``}</style>
    </Flex>
  );
};
