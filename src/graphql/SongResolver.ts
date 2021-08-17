import { ObjectType, Field, ID } from "type-graphql";
import { AlbumResolver } from "./AlbumResolver";
import type { AlbumType } from "./AlbumResolver";
import { ArtistResolver } from "./ArtistResolver";
import type { ArtistType } from "./ArtistResolver";

export type SongType = {
  id: string;
  name: string;
  previewUrl: string;
  album: AlbumType;
  artists: ArtistType[];
  uri: string;
};

@ObjectType()
export class SongResolver {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  uri?: string;

  @Field(() => AlbumResolver)
  album?: AlbumType;

  @Field(() => [ArtistResolver])
  artists?: ArtistType[];

  @Field(() => String, { nullable: true })
  get previewUrl(): string | null {
    return this.preview_url;
  }
}
