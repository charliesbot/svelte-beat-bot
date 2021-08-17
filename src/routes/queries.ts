import { graphqlClient } from "./graphqlClient";

export const GET_TOP_TRACKS = `
    query GetTopTracks($entity: String!, $timeRange: String!, $limit: Int!) {
      topTracks(entity: $entity, timeRange: $timeRange, limit: $limit) {
        previewUrl
        id
        name
        artists {
          id
          name
        }
        album {
          id
          name
          images {
            width
            height
            url
          }
        }
      }
    }
  `;

export const GET_FAKE_TRACKS = `
    query GetTopTracksFake {
      topTracksFake {
        previewUrl
        id
        name
        artists {
          id
          name
        }
        album {
          id
          name
          images {
            width
            height
            url
          }
        }
      }
    }
  `;

export const getTopTracksFake = async () => {
  const data = await graphqlClient.request(GET_FAKE_TRACKS);
  return data;
};
