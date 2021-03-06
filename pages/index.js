import axios from "axios";
import React from "react";
import { Waypoint } from "react-waypoint";
import { BackgroundImage } from "../components/BackgroundImage";
import { Github } from "../components/index/Github";
import { Lastfm } from "../components/index/Lastfm";
import { Layout } from "../components/Layout";

const Home = ({ homeData }) => {
  const { github, lastfm } = homeData;

  return (
    <Layout>
      <BackgroundImage />

      <Lastfm data={lastfm} />
      <Github data={github} />

      <Waypoint
        onEnter={() =>
          (document.getElementById("indexBackground").style.zIndex = -101)
        }
        onLeave={() =>
          (document.getElementById("indexBackground").style.zIndex = -99)
        }
      />
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios.get(`${process.env.SERVER_URL}/api/rest/home`);
  return {
    props: {
      homeData: res.data,
    },
  };
};

// needs to be default
export default Home;
