import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
  introspection: true,
});

export default server.createHandler();
