import { ObjectType, Field, ID } from "type-graphql";
import { Album } from "./Album";
import type { AlbumType } from "./Album";
import { Artist } from "./Artist";
import type { ArtistType } from "./Artist";

export type SongType = {
  id: string;
  name: string;
  previewUrl: string;
  album: AlbumType;
  artists: ArtistType[];
  uri: string;
};

@ObjectType()
class Song {
  @Field((type) => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  uri?: string;

  @Field(() => Album)
  album?: AlbumType;

  @Field(() => [Artist])
  artists?: ArtistType[];

  @Field(() => String)
  get previewUrl(): string {
    return this.preview_url;
  }
}

export { Song };
