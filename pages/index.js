import axios from "axios";
import React from "react";
import { Waypoint } from "react-waypoint";
import { Box, Grid, Heading, Text, useThemeUI } from "theme-ui";
import { Layout } from "../components/Layout";

const Home = (props) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const { github, lastfm } = props;

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
            backgroundImage: `url(/images/crowd4.jpg)`,
            backgroundSize: "cover",
            height: "inherit",
            width: "100%",
            maxWidth: "100%",
            zIndex: -100,
          }}
        />
      </Box>
      <div className="hero">
        <h1 className="title">Welcome to Next.js!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className="row">
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
        </div>
      </div>

      <Box
        className="lastfm"
        py={[
          `${theme.space[5]}px`,
          `${theme.space[5]}px`,
          `${theme.space[5]}px`,
        ]}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: `100vh`,
          backgroundColor: "rgba(255,255,255,.5)",
        }}
      >
        <Box
          p={4}
          sx={{ width: ["100%", "100%", "75%"], backgroundColor: "white" }}
        >
          <Box>
            <Heading as="h2" mb={3}>
              <a href="http://last.fm/user/gung" target="_blank">
                Lastfm
              </a>{" "}
              /{" "}
              <a
                href="https://open.spotify.com/user/1128845569?si=lpkYYRllTVCOrLiT56aOhQ"
                target="_blank"
              >
                Spotify
              </a>
            </Heading>
            <Grid
              p={4}
              gap={10}
              columns={[(1, "1fr"), (1, "1fr"), (2, "1fr 1fr")]}
              sx={{ backgroundColor: "whitesmoke" }}
            >
              {lastfm.map((o, idx) => {
                return (
                  <Box
                    p={2}
                    key={`${o.mbid}-${idx}`}
                    sx={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Box mr={2}>
                      <img src={`${o["image"][0]["#text"]}`} />
                    </Box>
                    <Box>
                      <a
                        href={o.url}
                        target="_blank"
                        style={{ display: "block" }}
                      >
                        <Heading as="h4">{o.name}</Heading>
                        <Text>{`${o["artist"]["#text"]} - ${o["album"]["#text"]}`}</Text>
                      </a>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        className="github"
        py={`${theme.space[5]}px`}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: `100vh`,
          backgroundColor: "whitesmoke",
        }}
      >
        <Box
          p={4}
          sx={{ width: ["100%", "100%", "50%"], backgroundColor: "white" }}
        >
          <Heading as="h2" mb={3}>
            Github repos!
          </Heading>
          {github.map((o, idx) => {
            return (
              <Box
                p={2}
                key={`${o.id}-${idx}`}
                sx={{
                  backgroundColor: idx % 2 === 0 ? "white" : "#efefef",
                }}
              >
                <a
                  href={o.html_url}
                  target="_blank"
                  style={{ display: "block" }}
                >
                  <Heading as="h4">{o.name}</Heading>
                  <Text>{o.description}</Text>
                </a>
              </Box>
            );
          })}
        </Box>
      </Box>

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
          width: 100%;
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
        .row {
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
          margin-right: 15px;
          margin-left: 15px;
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
  const github = new Promise((resolve) => {
    axios
      .get(
        `https://api.github.com/users/${process.env.gitUser}/repos?sort=created&direction=desc`
      )
      .then((res) => {
        resolve({ github: res.data });
      });
  });
  const lastfm = new Promise((resolve) => {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.lastfmUser}&api_key=${process.env.lastfmApiKey}&format=json&limit=${process.env.lastfmCount}`
      )
      .then((res) => {
        resolve({ lastfm: res.data.recenttracks.track });
      });
  });

  return Promise.all([github, lastfm])
    .then((values) => {
      // console.log(JSON.stringify(values[0].github, null, 2));
      return {
        github: values[0].github,
        lastfm: values[1].lastfm,
      };
    })
    .catch((e) => {
      // console.log(JSON.stringify(e.message));
      return {
        github: [
          {
            name: "repo1",
            description: "some desc",
            html_url: "http://ffdsfdf.de",
          },
          {
            name: "repo1 with some examples about nextjs",
            description:
              "some desc goes here some desc goes here some desc goes here some desc goes here",
            html_url: "http://ffdsfdf.de",
          },
        ],
        lastfm: [
          {
            artist: {
              "mbid": "a6c6897a-7415-4f8d-b5a5-3a5e05f3be67",
              "#text": "Twenty One Pilots",
            },
            album: {
              "mbid": "05c67876-38cc-4297-ad2b-754247d2ab83",
              "#text": "Trench",
            },
            image: [
              {
                "size": "small",
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/34s/f0b8e8b381c3530cede2993a5c133323.png",
              },
            ],
            streamable: "0",
            date: {
              "uts": "1584321108",
              "#text": "16 Mar 2020, 01:11",
            },
            url: "https://www.last.fm/music/Twenty+One+Pilots/_/Bandito",
            name: "Bandito",
            mbid: "3aadb9b7-6c1c-4c6b-a8a8-384514748456",
          },
          {
            artist: {
              "mbid": "a6c6897a-7415-4f8d-b5a5-3a5e05f3be67",
              "#text": "Twenty One Pilots",
            },
            album: {
              "mbid": "05c67876-38cc-4297-ad2b-754247d2ab83",
              "#text": "Trench",
            },
            image: [
              {
                "size": "small",
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/34s/f0b8e8b381c3530cede2993a5c133323.png",
              },
            ],
            streamable: "0",
            date: {
              "uts": "1584320769",
              "#text": "16 Mar 2020, 01:06",
            },
            url: "https://www.last.fm/music/Twenty+One+Pilots/_/Cut+My+Lip",
            name: "Cut My Lip",
            mbid: "1393f50c-1dec-4bc8-915e-4a872e0e4b9f",
          },
          {
            artist: {
              "mbid": "a6c6897a-7415-4f8d-b5a5-3a5e05f3be67",
              "#text": "Twenty One Pilots",
            },
            album: {
              "mbid": "05c67876-38cc-4297-ad2b-754247d2ab83",
              "#text": "Trench",
            },
            image: [
              {
                "size": "small",
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/34s/f0b8e8b381c3530cede2993a5c133323.png",
              },
              {
                "size": "medium",
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/64s/f0b8e8b381c3530cede2993a5c133323.png",
              },
              {
                "size": "large",
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/174s/f0b8e8b381c3530cede2993a5c133323.png",
              },
              {
                "size": "extralarge",
                "#text":
                  "https://lastfm.freetls.fastly.net/i/u/300x300/f0b8e8b381c3530cede2993a5c133323.png",
              },
            ],
            streamable: "0",
            date: {
              "uts": "1584320544",
              "#text": "16 Mar 2020, 01:02",
            },
            url:
              "https://www.last.fm/music/Twenty+One+Pilots/_/Nico+and+the+Niners",
            name: "Nico and the Niners",
            mbid: "153e7d14-83b5-48e7-948b-933aa7995119",
          },
        ],
      };
    });
};

// needs to be default
export default Home;
