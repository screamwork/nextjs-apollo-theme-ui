const isAuthenticated = async (resolve, parent, args, context, info) => {
  if (!context.session.userId) {
    console.log("userId from middleware: ", context.session.userId);
    // user is not logged in
    throw new Error("not authenticated from graphql middleware");
  }

  return resolve(parent, args, context, info);
};

const middleware = {
  Mutation: {},
  Query: {},
};

module.exports = middleware;
