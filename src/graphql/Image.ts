import { ObjectType, Field, Int } from "type-graphql";

export type ImageType = {
  width: number;
  height: number;
  url: string;
};

@ObjectType()
export class Image {
  @Field((type) => Int)
  width: number;

  @Field(() => Int)
  height: number;

  @Field(() => String)
  url: string;
}
