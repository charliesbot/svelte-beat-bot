import { Resolver, Query, Args, Arg, ArgsType, InputType, Field, Ctx, Int } from "type-graphql";

import type { SpotifySDK, Entity, TimeRange } from "$lib/SpotifySDK";

import { Song } from "./Song";
import { User } from "./User";

type Context = {
  client: ReturnType<typeof SpotifySDK>;
};

@Resolver()
export class Resolvers {
  @Query(() => String)
  hello() {
    return "world";
  }

  @Query(() => [Song])
  async topTracks(
    @Arg("entity", () => String) entity: Entity,
    @Arg("timeRange", () => String) timeRange: TimeRange,
    @Arg("limit", () => Int) limit: number,
    @Ctx() ctx: Context
  ) {
    const topTracks = await ctx.client.getTopTracks(entity, timeRange, limit);
    return topTracks.items;
  }

  @Query(() => User)
  async user(@Ctx() ctx: Context) {
    const user = await ctx.client.getUser();
    return user;
  }
}
