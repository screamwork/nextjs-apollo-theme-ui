const session = require("express-session");
const redis = require("./redis");
const connectRedis = require("connect-redis");

const RedisStore = connectRedis(session);

module.exports = session({
  store: new RedisStore({
    client: redis,
    prefix: "sess:",
  }),
  name: `${process.env.SESSION_KEY}`,
  secret: `${process.env.SESSION_SECRET}`,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, //process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
});
