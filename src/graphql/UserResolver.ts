import { ObjectType, Field, ID } from "type-graphql";

// type User {
// id: ID
// name: String
// externalUrls: ExternalUrls
// href: String
// images: [Image]
// type: String
// uri: String
// }

@ObjectType()
export class UserResolver {
  @Field((type) => ID)
  id: string;

  @Field(() => String)
  get name(): string {
    return this.display_name;
  }

  @Field(() => String)
  get externalUrls(): string {
    return this.external_urls;
  }
}
