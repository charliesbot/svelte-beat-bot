import { ObjectType, Field, ID } from "type-graphql";
import { ImageResolver } from "./ImageResolver";
import type { ImageType } from "./ImageResolver";

export type AlbumType = {
  id: string;
  name: string;
  uri: string;
  images: any[];
};

@ObjectType()
export class AlbumResolver {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  uri: string;

  @Field(() => [ImageResolver])
  images: ImageType[];
}
