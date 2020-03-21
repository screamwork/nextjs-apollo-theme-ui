const fs = require("fs");
const glob = require("glob");

import { makeExecutableSchema } from "graphql-tools";
import { mergeResolvers, mergeTypes } from "merge-graphql-schemas";

function requireF(modulePath) {
  try {
    return require(modulePath).resolvers;
  } catch (e) {
    console.log(
      'requireF(): The file "' + modulePath + '" could not be loaded.'
    );
    return false;
  }
}

export const genSchema = () => {
  const pathToModules = `${process.cwd()}/modules`;

  const graphqlTypes = glob
    .sync(`${pathToModules}/**/*.graphql`)
    .map((x) => fs.readFileSync(x, { encoding: "utf8" }));

  console.log(graphqlTypes);

  const resolvers = glob
    .sync(`${pathToModules}/**/resolvers.js`)
    .map((resolver) => {
      console.log(JSON.stringify(resolver, null, 2));
      requireF(resolver);
    });

  console.log(resolvers);

  return makeExecutableSchema({
    typeDefs: mergeTypes(graphqlTypes),
    resolvers: mergeResolvers(resolvers)
  });
};
