import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

export const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost/wp2020"
    : "http://graphql-server-exp.herokuapp.com";

const httpLink = new HttpLink({
  uri: `${host}/graphql`,
  credentials: "same-origin",
  // headers: {
  //   'Content-type': 'application/json',
  //   'Authorization': 'Bearer jwtToken'
  // }
  fetch
});

export const createApolloClient = (initialState, ctx) => {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: httpLink,
    cache: new InMemoryCache().restore(initialState)
  });
};
