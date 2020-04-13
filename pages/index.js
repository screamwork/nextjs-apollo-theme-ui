import axios from "axios";
import React from "react";
import { FaGithub } from "react-icons/fa";
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
      <div className="hero">
        <Heading as="h2">Welcome to Next.js!</Heading>
        <Flex
          sx={{
            margin: "80px auto 40px",
            flexDirection: ["column", "column", "row"],
            justifyContent: "space-between",
            width: ["100%", "100%", "75%"],
          }}
        >
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Learn more about Next.js in the documentation.</p>
          </a>
          <a href="https://nextjs.org/learn" className="card">
            <h3>Next.js Learn &rarr;</h3>
            <p>Learn about Next.js by following an interactive tutorial!</p>
          </a>
          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </Flex>
      </div>

      <Flex
        py={[
          `${theme.space[5]}px`,
          `${theme.space[5]}px`,
          `${theme.space[5]}px`,
        ]}
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
          <Box>
            <Heading as="h2" mb={3} sx={{ color: "crimson" }}>
              <Link
                href={`${process.env.lastfmUrl}`}
                target="_blank"
                sx={{ color: "crimson" }}
              >
                Last.fm
              </Link>{" "}
              &middot;{" "}
              <Link
                href={`${process.env.spotifyUrl}`}
                target="_blank"
                sx={{ color: "crimson" }}
              >
                Spotify
              </Link>
            </Heading>
            <Grid
              p={[2, 2, 2, 2]}
              gap={10}
              columns={[(1, "1fr"), (1, "1fr"), (2, "1fr 1fr")]}
              sx={{ backgroundColor: "#333" }}
            >
              {checkLastfmIsPlaying(lastfm).map((o, idx) => {
                return (
                  <Box
                    p={2}
                    key={`${o.mbid}-${idx}`}
                    sx={{
                      backgroundColor: "#444",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Box mr={2}>
                      <img src={`${o["image"][0]["#text"]}`} />
                    </Box>
                    <Box>
                      <Link href={o.url} target="_blank">
                        <Heading
                          as="h4"
                          sx={{
                            wordBreak: "break-word",
                            color: "crimson",
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
                      </Link>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Box>
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
                  <Text sx={{ color: "whitesmoke" }}>{o.description}</Text>
                </Link>
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

      <style jsx>{`
        .hero {
          // width: 100%;
          color: #333;
          min-height: 100vh;
          background-color: white !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .card {
          padding: 13px 13px 19px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
          margin: 5px 5px 15px;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
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
