module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_TABLE,
    },
  },
  production: { client: "pg", connection: process.env.DATABASE_URL },
};
