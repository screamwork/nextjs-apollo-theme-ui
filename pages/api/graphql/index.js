import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const Graphql_Path = "/api/graphql";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true,
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
    res,
    // pubsub
  }),
});

const handler = apolloServer.createHandler({ path: Graphql_Path });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
