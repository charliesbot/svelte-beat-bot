import { ObjectType, Field, ID } from "type-graphql";
import { Image } from "./Image";
import type { ImageType } from "./Image";

export type AlbumType = {
  id: string;
  name: string;
  uri: string;
  images: any[];
};

@ObjectType()
export class Album {
  @Field((type) => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  uri: string;

  @Field(() => [Image])
  images: ImageType[];
}
