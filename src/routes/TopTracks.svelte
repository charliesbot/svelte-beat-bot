<script lang="ts">
  import BetterScroll from "@better-scroll/core";
  import { operationStore, query } from "@urql/svelte";
  import Song from "$lib/components/Song.svelte";
  import { getCenter } from "$lib/utils/layout";

  let wrapper: HTMLElement;
  let maxElementsPerRow = 13;
  let currentSize = 200;
  let origin: {
    x: number;
    y: number;
  };
  let scrollPoints: any;

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
      limit: 49,
    }
  );

  const GET_FAKE_TRACKS = operationStore(
    `
    query GetTopTracksFake {
      topTracksFake {
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
  `
  );

  const queryResult = query(GET_FAKE_TRACKS);

  $: if (wrapper) {
    const songs: HTMLElement[] = Array.from(wrapper.querySelectorAll(".song"));
    origin = getCenter(document.body);

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

    bscroll.on("scroll", (coords) => {
      scrollPoints = coords;
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
      --height:{Math.ceil($queryResult.data.topTracksFake.length / maxElementsPerRow) *
        currentSize};
      --maxElementsPerRow:{maxElementsPerRow}
      "
    >
      {#each $queryResult.data.topTracksFake as song}
        <Song size={currentSize} {song} {scrollPoints} {currentSize} {origin} />
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
