<script lang="ts">
  import BetterScroll from "@better-scroll/core";
  import { useQuery } from "@sveltestack/svelte-query";
  import { operationStore, query } from "@urql/svelte";
  import Song from "$lib/components/Song.svelte";
  import { distanceBetweenPoints, getCenter } from "$lib/utils/layout";
  import { songs as music } from "../song";

  let wrapper: HTMLElement;
  let maxElementsPerRow = 14;
  let currentSize = 200;

  const GET_TOP_TRACKS = operationStore(
    `
    query GetTopTracks($entity: String!, $timeRange: String!, $limit: Int!) {
      topTracks(entity: $entity, timeRange: $timeRange, limit: $limit) {
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
  `,
    {
      entity: "tracks",
      timeRange: "long_term",
      limit: 50,
    }
  );

  const queryResult = query(GET_TOP_TRACKS);

  $: if (wrapper) {
    const songs: HTMLElement[] = Array.from(wrapper.querySelectorAll(".song"));

    let bscroll: BetterScroll = new BetterScroll(wrapper, {
      freeScroll: true,
      probeType: 3,
    });

    bscroll.scroller.scrollToElement(
      songs[Math.floor(songs.length / 2)],
      1000,
      currentSize / 2,
      currentSize / 2
    );

    bscroll.on("scroll", () => {
      const distances = songs.map((song) => {
        const rect = song.getBoundingClientRect();
        const coords = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        const origin = getCenter(document.body);
        const calculatedDistance = distanceBetweenPoints(origin, coords);
        const delta = 2 - calculatedDistance / (currentSize * 1.65);
        const limitedDelta = Math.max(delta, 1);
        const zIndex = Math.ceil(limitedDelta * 100);
        return { delta: limitedDelta, zIndex };
      });

      songs.forEach((song, index) => {
        const { delta, zIndex } = distances[index];
        song.style.transform = `scale3d(${delta}, ${delta}, ${delta})`;
        delta > 1.5 ? song.classList.add("show-overlay") : song.classList.remove("show-overlay");
        song.style.zIndex = zIndex.toString();
      });
    });
  }
</script>

{#if $queryResult.fetching}
  <span>Loading...</span>
{:else if $queryResult.error}
  <span>Error: {$queryResult.error.message}</span>
{:else}
  <main bind:this={wrapper}>
    <aside
      class="content"
      style="
      --width:{currentSize * maxElementsPerRow}px;
      --height:{Math.ceil(music.length / maxElementsPerRow) * currentSize};
      --maxElementsPerRow:{maxElementsPerRow}
      "
    >
      {#each $queryResult.data.topTracks as song}
        <Song size={currentSize} {song} />
      {/each}
    </aside>
  </main>
{/if}

<style lang="scss">
  main {
    width: 3.125rem;
    height: 3.125rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -1.5625rem;
    margin-top: -1.5625rem;
  }

  aside {
    display: grid;
    grid-template-columns: repeat(var(--maxElementsPerRow), 200px);
    grid-template-rows: repeat(mar(--maxElementsPerRow), maxEle 200px);
    position: relative;
    color: white;
    width: var(--width);
    height: var(--height);
    transform-style: preserve-3d;
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }
</style>
