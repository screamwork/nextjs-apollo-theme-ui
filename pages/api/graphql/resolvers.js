import { knex } from "../../../db/knex.js";

export const resolvers = {
  Query: {
    hello: async (_parent, _args, _context) => {
      // console.log(_context);
      const res = await knex.select().from("users");
      console.log(res);
      return "Hello";
    },
  },
};
