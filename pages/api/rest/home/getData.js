// @ts-check
import axios from "axios";
import GithubDummy from "../../../../json/github.json";
import LastfmDummy from "../../../../json/lastfm.json";
const fs = require("fs");
const path = require("path");

const saveToFile = async (filename, data) => {
  fs.writeFileSync(
    path.resolve("json", filename),
    JSON.stringify(data, null, 2)
  );
};

export default (req, res) => {
  const github = new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.github.com/users/${process.env.gitUser}/repos?sort=created&direction=desc`
      )
      .then((res) => {
        saveToFile("github.json", res.data);
        resolve({ github: res.data });
      })
      .catch((e) => {
        reject({ error: e.message });
      });
  });

  const lastfm = new Promise((resolve, reject) => {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.lastfmUser}&api_key=${process.env.lastfmApiKey}&format=json&limit=${process.env.lastfmCount}`
      )
      .then((res) => {
        saveToFile("lastfm.json", res.data.recenttracks.track);
        resolve({ lastfm: res.data.recenttracks.track });
      })
      .catch((e) => {
        reject({ error: e.message });
      });
  });

  return Promise.all([github, lastfm])
    .then((values) => {
      res.status(200).json(
        {
          github: values[0].github,
          lastfm: values[1].lastfm,
        } || null
      );
    })
    .catch((e) => {
      res.status(200).json(
        {
          github: GithubDummy,
          lastfm: LastfmDummy,
        } || null
      );
    });
};
