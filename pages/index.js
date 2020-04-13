import axios from "axios";
import React from "react";
import { FaGithub, FaLastfm, FaSpotify } from "react-icons/fa";
import { Waypoint } from "react-waypoint";
import { Box, Flex, Grid, Heading, Link, Text, useThemeUI } from "theme-ui";
import { Layout } from "../components/Layout";

const Home = (props) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const { github, lastfm } = props;

  const checkLastfmIsPlaying = (arr) => {
    if ("@attr" in arr[0]) {
      return [arr[0]].concat(arr.slice(2));
    } else {
      return arr;
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          height: `100vh`,
          overflow: "hidden",
        }}
      >
        <Box
          className="indexBackground"
          sx={{
            position: "fixed",
            backgroundImage: `url(${require("../public/images/crowd4.jpg")})`,
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            maxWidth: "100%",
            zIndex: -100,
          }}
        />
      </Box>

      <Flex
        py={5}
        sx={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: `100vh`,
          backgroundColor: "rgba(255,255,255,.25)",
        }}
      >
        <Box
          p={[2, 2, 3, 3]}
          py={4}
          sx={{ width: ["100%", "100%", "75%"], backgroundColor: "#222" }}
        >
          <Box mb={3}>
            <Flex sx={{ alignItems: "center" }}>
              <FaLastfm size={`1.1em`} color={"crimson"} />
              <Link
                href={`${process.env.lastfmUrl}`}
                target="_blank"
                sx={{ color: "crimson", marginLeft: "7px" }}
              >
                <Heading as="h2" mb={0} sx={{ color: "crimson" }}>
                  Last.fm
                </Heading>
              </Link>

              <Text
                sx={{
                  width: "25px",
                  color: "crimson",
                  textAlign: "center",
                  fontSize: 4,
                }}
              >
                {" "}
                &middot;{" "}
              </Text>

              <FaSpotify size={`1.1em`} color={"crimson"} />
              <Link
                href={`${process.env.spotifyUrl}`}
                target="_blank"
                sx={{ color: "crimson", marginLeft: "7px" }}
              >
                <Heading as="h2" mb={0} sx={{ color: "crimson" }}>
                  Spotify
                </Heading>
              </Link>
            </Flex>
          </Box>
          <Grid gap={16} columns={[(1, "1fr"), (1, "1fr"), (2, "1fr 1fr")]}>
            {checkLastfmIsPlaying(lastfm).map((o, idx) => {
              return (
                <Box
                  key={`${o.mbid}-${idx}`}
                  sx={{
                    backgroundColor: "#444",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    mr={2}
                    sx={{
                      width: ["50px", "75px", "75px", "75px"],
                      height: ["50px", "75px", "75px", "75px"],
                    }}
                  >
                    <img
                      src={`${o["image"][1]["#text"]}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box p={2}>
                    <Link href={o.url} target="_blank">
                      <Heading
                        as="h4"
                        sx={{
                          "wordBreak": "break-word",
                          "color": "crimson",
                          ":hover": { textDecoration: "underline" },
                        }}
                      >
                        {"@attr" in o && (
                          <img
                            // mr={`${theme.space[2]}px`}
                            style={{
                              marginRight: theme.space[2],
                              width: "16px",
                            }}
                            src={`${require("../public/images/now_playing.gif")}`}
                          />
                        )}
                        {o.name}
                      </Heading>
                    </Link>
                    <Text
                      sx={{
                        wordBreak: "break-word",
                        fontSize: [
                          theme.fontSizes[1],
                          theme.fontSizes[2],
                          theme.fontSizes[2],
                          theme.fontSizes[2],
                        ],
                        color: "whitesmoke",
                      }}
                    >{`${o["artist"]["#text"]} - ${o["album"]["#text"]}`}</Text>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Flex>

      <Flex
        py={`${theme.space[5]}px`}
        sx={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          minHeight: `100vh`,
          backgroundColor: "#111",
        }}
      >
        <Box
          p={[2, 2, 3, 3]}
          sx={{ width: ["100%", "100%", "50%"], backgroundColor: "#222" }}
        >
          <Heading as="h2" mb={3}>
            <Flex sx={{ alignItems: "center" }}>
              <FaGithub size={`1em`} color={"crimson"} />
              <Text ml={[1, 1, 2, 2]} sx={{ color: "whitesmoke" }}>
                Github repos!
              </Text>
            </Flex>
          </Heading>
          {github.map((o, idx) => {
            return (
              <Box
                p={(2, 2, 2, 2)}
                key={`${o.id}-${idx}`}
                sx={{
                  backgroundColor: idx % 2 === 0 ? "#333" : "#222",
                }}
              >
                <Link href={o.html_url} target="_blank">
                  <Heading
                    as="h4"
                    sx={{
                      "color": "crimson",
                      "fontFamily": "Menlo, monospace",
                      ":hover": { textDecoration: "underline" },
                    }}
                  >
                    {`> ${o.name}`}
                  </Heading>
                </Link>
                <Text sx={{ color: "whitesmoke" }}>{o.description}</Text>
              </Box>
            );
          })}
        </Box>
      </Flex>

      <Waypoint
        onEnter={() =>
          (document.getElementsByClassName(
            "indexBackground"
          )[0].style.zIndex = -101)
        }
        onLeave={() =>
          (document.getElementsByClassName(
            "indexBackground"
          )[0].style.zIndex = -99)
        }
      />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return axios
    .get(`${process.env.SERVER_URL}/api/rest/getData_home`)
    .then((res) => res.data)
    .catch((e) => {
      console.log(JSON.stringify(e, null, 2));
    });
};

// needs to be default
export default Home;
