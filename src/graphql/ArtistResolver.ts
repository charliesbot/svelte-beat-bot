import { ObjectType, Field, ID } from "type-graphql";

export type ArtistType = {
  id: string;
  href: string;
  name: string;
  type: string;
  uri: string;
};

@ObjectType()
export class ArtistResolver {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  href: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  uri: string;
}
