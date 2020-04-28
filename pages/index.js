import axios from "axios";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Waypoint } from "react-waypoint";
import { Box, Flex, Grid, Heading, Text, useThemeUI } from "theme-ui";
import { GithubColumn } from "../components/index/GithubColumn";
import { LastfmColumn } from "../components/index/LastfmColumn";
import { LastfmHeading } from "../components/index/LastfmHeading";
import { Layout } from "../components/Layout";

const Home = ({ homeData }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const { github, lastfm } = homeData;

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
            <LastfmHeading />
          </Box>
          <Grid gap={16} columns={[(1, "1fr"), (1, "1fr"), (2, "1fr 1fr")]}>
            {checkLastfmIsPlaying(lastfm).map((o, idx) => {
              return <LastfmColumn o={o} key={`${o.mbid}${idx}`} />;
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
            return <GithubColumn o={o} idx={idx} key={`${o.mbid}${idx}`} />;
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

export const getStaticProps = async (context) => {
  const res = await axios.get(
    `${process.env.SERVER_URL}/api/rest/home/getData`
  );
  return {
    props: {
      homeData: res.data,
    },
  };
};

// needs to be default
export default Home;
