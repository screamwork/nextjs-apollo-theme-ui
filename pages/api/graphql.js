import { ApolloServer } from "apollo-server-micro";
import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: async (_parent, _args, _context) => "Hello!"
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // debug: true,
  // playground: {
  //   endpoint: "/graphql"
  //   // subscriptionEndpoint: "/subscriptions"
  // },
  // subscriptions: {
  //   path: "/subscriptions",
  //   onConnect: () => console.log("connected"),
  //   onDisconnect: () => console.log("disconnected")
  // },
  introspection: true,
  context: ({ req, res }) => ({
    // redis,
    url: req ? req.protocol + "://" + req.get("host") : false,
    // session: req ? req.session : false,
    req,
    res
    // pubsub
  })
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;
