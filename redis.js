const Redis = require("ioredis");

const redis = new Redis(
  process.env.NODE_ENV === "production"
    ? process.env.REDIS_URL_PRODUCTION
    : "redis://127.0.0.1:6379"
);

module.exports = { redis };
