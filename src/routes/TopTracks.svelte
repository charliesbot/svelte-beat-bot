<script lang="ts">
  import BetterScroll from "@better-scroll/core";
  import { useQuery } from "@sveltestack/svelte-query";
  import Song from "$lib/components/Song.svelte";
  import { getCenter, isMobile, distanceBetweenPoints } from "$lib/utils/layout";
  import { graphqlClient } from "./graphqlClient";
  import { GET_FAKE_TRACKS } from "./queries";
  let wrapper: HTMLElement;
  let maxElementsPerRow = 13;
  let origin: {
    x: number;
    y: number;
  };
  let scrollPoints: any;
  let currentSize = 150;
  const queryResult = useQuery("repoData", async () => {
    return graphqlClient.request(GET_FAKE_TRACKS);
  });
  $: if (wrapper) {
    currentSize = isMobile() ? 150 : 200;
    const songs: HTMLElement[] = Array.from(wrapper.querySelectorAll(".song"));
    const observer = new IntersectionObserver(
      (changes, observer) => {
        changes.forEach((change) => {
          if (!change.isIntersecting) {
            change.target.style.visibility = "hidden";
          } else {
            change.target.style.visibility = "visible";
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    songs.forEach((el) => {
      observer.observe(el);
    });

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

    bscroll.on("scroll", () => {
      const distances = songs.map((s) => {
        const rect = s.getBoundingClientRect();
        const coords = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        const calculatedDistance = distanceBetweenPoints(origin, coords);
        const delta = 2 - calculatedDistance / (currentSize * 1.65);
        const limitedDelta = Math.max(delta, 1);
        const zIndex = Math.ceil(limitedDelta * 100);
        return { delta: limitedDelta, zIndex };
      });

      songs.forEach((s, index) => {
        const { delta, zIndex } = distances[index];
        s.style.transform = `scale3d(${delta}, ${delta}, ${delta})`;
        delta > 1.5 ? s.classList.add("show-overlay") : s.classList.remove("show-overlay");
        s.style.zIndex = zIndex.toString();
      });
    });
  }
</script>

{#if $queryResult.isLoading}
  <span>Loading...</span>
{:else if $queryResult.error}
  <span>An error has occurred: {$queryResult.error.message}</span>
{:else}
  <main bind:this={wrapper}>
    <aside
      class="content"
      style="
      --width:{currentSize * maxElementsPerRow}px;
      --height:{Math.ceil($queryResult.data.topTracksFake.length / maxElementsPerRow) *
        currentSize};
      --size:{currentSize}px;
      --maxElementsPerRow:{maxElementsPerRow}
      "
    >
      {#each $queryResult.data.topTracksFake as song}
        <Song size={currentSize} {song} {origin} {scrollPoints} />
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
    grid-template-columns: repeat(var(--maxElementsPerRow), var(--size));
    grid-template-rows: repeat(mar(--maxElementsPerRow), var(--size));
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
