import { GraphQLClient } from "graphql-request";

const dev = "http://localhost:3000/graphql";
const prod = "https://svelte-beat-bot.vercel.app/graphql";

export const graphqlClient = new GraphQLClient(dev, {
  headers: {},
});
