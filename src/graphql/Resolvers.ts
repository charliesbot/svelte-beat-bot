import { Resolver, Query, Args, Arg, ArgsType, InputType, Field, Ctx, Int } from "type-graphql";
import { fakeSongs } from "../song";

import type { SpotifySDK, Entity, TimeRange } from "$lib/SpotifySDK";

import { SongResolver } from "./SongResolver";
import { UserResolver } from "./UserResolver";

type Context = {
  client: ReturnType<typeof SpotifySDK>;
};

@Resolver()
export class Resolvers {
  @Query(() => String)
  hello() {
    return "world";
  }

  @Query(() => [SongResolver])
  async topTracks(
    @Arg("entity", () => String) entity: Entity,
    @Arg("timeRange", () => String) timeRange: TimeRange,
    @Arg("limit", () => Int) limit: number,
    @Ctx() ctx: Context
  ) {
    const topTracks = await ctx.client.getTopTracks(entity, timeRange, limit);
    return topTracks.items;
  }

  @Query(() => [SongResolver])
  async topTracksFake() {
    return fakeSongs;
  }

  @Query(() => [SongResolver])
  async topTracksFromAllTimeRanges(@Ctx() ctx: Context) {
    const topTracks = await ctx.client.getTopTracksFromAllTimeRanges();
    return topTracks;
  }

  @Query(() => UserResolver)
  async user(@Ctx() ctx: Context) {
    const user = await ctx.client.getUser();
    return user;
  }
}
