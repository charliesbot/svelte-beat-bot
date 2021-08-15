import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Resolvers } from "./Resolvers";

export const createSchema = async () =>
  await buildSchema({
    resolvers: [Resolvers],
  });

export const defaultQuery = `# Try out our API with a query like this:
query {
	double(number: 12)
}
`;
