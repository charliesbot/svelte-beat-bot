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
    getTopTracksFromAllTimeRanges: async () => {
      const entity: Entity = "tracks";
      const limit = 50;
      const promises = ["short_term", "medium_term", "long_term"].map((timeRange) =>
        client.get(`me/top/${entity}?limit=${limit}&time_range=${timeRange}`)
      );

      const results = await Promise.all(promises);

      const set = new Set();

      const songs = results
        .map((r) => r.items)
        .flat()
        .filter((song) => {
          if (!set.has(song.id)) {
            set.add(song.id);
            return true;
          }

          return false;
        });

      console.log(JSON.stringify(songs));

      return songs;
    },
    getRecommendationsBasedOnSeeds: async ({ seedTracks }: Seeds) => {
      const seedTracksQuery = `seed_tracks=${seedTracks.join()}`;
      const songs = await client.get(`recommendations?${seedTracksQuery}`);
      return songs.data.tracks;
    },
  };
};
