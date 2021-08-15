import { SpotifyClient } from "./SpotifyClient";

export type Entity = "tracks" | "artists";
export type TimeRange = "short_term" | "medium_term" | "long_term";
type Seeds = {
  seedTracks: string[];
};

export const SpotifySDK = (request: Request) => {
  const token: string = request.headers["Authorization"] ?? request.headers["authorization"];
  const client = new SpotifyClient(token);

  return {
    getUser: async () => {
      return await client.get("me");
    },
    getPlaylist: async (playlistId: string) => {
      return await client.get(`playlists/${playlistId}`);
    },
    getTopTracks: async (entity: Entity, time_range: TimeRange = "medium_term", limit: number) => {
      const songs = await client.get(`me/top/${entity}?limit=${limit}&time_range=${time_range}`);
      return songs;
    },
    getRecommendationsBasedOnSeeds: async ({ seedTracks }: Seeds) => {
      const seedTracksQuery = `seed_tracks=${seedTracks.join()}`;
      const songs = await client.get(`recommendations?${seedTracksQuery}`);
      return songs.data.tracks;
    },
  };
};
