import React from "react";
import { Box, Heading, Text, useThemeUI } from "theme-ui";
import { getHeight } from "../theme";

export const PostGrid = ({ posts }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const { h } = getHeight();
  const first = posts[0];

  const obj = {
    1: "b",
    2: "c",
    3: "d",
    4: "e"
  };

  return (
    <Box
      py={5}
      pt={`${theme.space[6]}px`}
      sx={{
        flex: 1,
        minHeight: h,
        backgroundColor: "pink",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box sx={{ width: ["100%", "100%", "75%"] }}>
        <div className="grid">
          <div className="box a">
            <img src={first.featuredImage.sourceUrl} />
            <a href={`/posts/${first.slug}`}>
              <Heading
                as="h4"
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  textDecoration: "inherit"
                }}
              >
                {first.title}
              </Heading>
            </a>
            <Text
              dangerouslySetInnerHTML={{ __html: first.excerpt }}
              sx={{ fontSize: 2 }}
            />
          </div>
          {posts.map((p, idx) => {
            if (idx === 0 || idx > 3) {
              return;
            }
            return (
              <Box>
                <Box
                  className={`box ${obj[idx]}`}
                  key={p.postId}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  {p?.featuredImage?.sourceUrl && (
                    <img src={p.featuredImage.sourceUrl} />
                  )}
                  <Box>
                    <a href={`/posts/${p.slug}`}>
                      <Heading
                        as="h4"
                        sx={{
                          textTransform: "capitalize",
                          color: "white",
                          textDecoration: "inherit"
                        }}
                      >
                        {p.title}
                      </Heading>
                    </a>
                    <Text
                      dangerouslySetInnerHTML={{ __html: p.excerpt }}
                      sx={{ fontSize: 2 }}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </div>
      </Box>
      <style jsx>{`
        .grid {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          background-color: transparent;
          color: #444;
        }

        .box {
          background-color: #333;
          color: #fff;
          border-radius: 5px;
          padding: 20px;
          font-size: 150%;
        }
        .box img {
          max-width: 100%;
        }

        .a {
          grid-column: 1 / 3;
          grid-row: 1 / 4;
        }

        .b {
          grid-column: 3 / 5;
          grid-row: 1;
        }
        .c {
          grid-column: 3 / 5;
          grid-row: 2;
        }
        .d {
          grid-column: 3 / 5;
          grid-row: 3;
        }
        .e {
          grid-column: 3 / 5;
          grid-row: 4;
        }
      `}</style>
    </Box>
  );
};
