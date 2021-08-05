<script lang="ts">
  import Song from "./components/Song.svelte";
  import BetterScroll from "@better-scroll/core";
  import { distanceBetweenPoints, getCenter } from "./utils/layout";
  import { songs } from "./songs";

  let wrapper: HTMLDivElement;
  let currentSize = 200;

  $: if (wrapper) {
    console.log("papita");
    let bscroll: BetterScroll = new BetterScroll(wrapper, {
      freeScroll: true,
      probeType: 3,
      /* scrollbar: false, */
      /* scrollX: true, */
      /* scrollY: true, */
    });
    bscroll.scroller.scrollToElement(
      songs[Math.floor(songs.length / 2)].node,
      1000,
      currentSize / 2,
      currentSize / 2
    );

    bscroll.on("scroll", () => {
      const distances = songs.map((s) => {
        const rect = s.node.getBoundingClientRect();
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
        const s = song.node;
        const { delta, zIndex } = distances[index];
        s.style.transform = `scale3d(${delta}, ${delta}, ${delta})`;
        delta > 1.5
          ? s.classList.add("show-overlay")
          : s.classList.remove("show-overlay");
        s.style.zIndex = zIndex.toString();
      });
    });
  }
</script>

<main bind:this={wrapper}>
  <aside
    class="content"
    style="
      --width:{currentSize * 7}px;
      --height:{Math.ceil(songs.length / 7) * currentSize}"
  >
    {#each songs as song}
      <Song size={currentSize} {song} bind:node={song.node} />
    {/each}
  </aside>
</main>

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
    grid-template-columns: repeat(7, 200px);
    grid-template-rows: repeat(7, 200px);
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
