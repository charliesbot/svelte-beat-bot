/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
  userid: string;
}

export type Maybe<T> = T | null;

export interface Image {
  width: number;
  height: number;
  url: string;
}

export interface Album {
  id: string;
  name: string;
  uri: string;
  images: Image[];
}

export interface Artist {
  id?: Maybe<string>;
  href?: Maybe<string>;
  name?: Maybe<string>;
  type?: Maybe<string>;
  uri?: Maybe<string>;
}

export interface SongType {
  id: string;
  name: string;
  previewUrl?: Maybe<string>;
  album?: Album;
  artists?: Artist[];
  uri?: string;
}
