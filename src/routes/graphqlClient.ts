import { GraphQLClient } from "graphql-request";

const dev = "http://localhost:3000/graphql";

export const graphqlClient = new GraphQLClient("https://svelte-beat-bot.vercel.app/graphql", {
  headers: {},
});
