// @ts-check
import axios from "axios";
import GithubDummy from "../../json/github.json";
import LastfmDummy from "../../json/lastfm.json";

let cache = {
  time: null,
  github: null,
  lastfm: null,
};

export default (req, res) => {
  const github = new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.github.com/users/${process.env.gitUser}/repos?sort=created&direction=desc`
      )
      .then((res) => {
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
        resolve({ lastfm: res.data.recenttracks.track });
      })
      .catch((e) => {
        reject({ error: e.message });
      });
  });

  console.log(cache.time, Date.now() - cache.time);

  if (cache.time && Date.now() - cache.time < 900000) {
    console.log("CACHE");
    res.status(200).json({
      lastfm: cache.lastfm,
      github: cache.github,
    });
  } else {
    console.log("FETCH");
    return Promise.all([github, lastfm])
      .then((values) => {
        cache.time = Date.now();
        cache.github = values[0].github;
        cache.lastfm = values[1].lastfm;
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
  }
};
