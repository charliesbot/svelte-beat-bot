import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient("https://svelte-beat-bot.vercel.app/graphql", {
  headers: {},
});
