<script lang="ts">
  import type { SongType } from "$lib/types";

  export let node: HTMLDivElement;
  export let size: number;
  export let song: SongType;

  const { album, previewUrl } = song;
  const coverArt = album.images[1].url;
</script>

<div class="song" style="--size:{size}px; --coverArt:url({coverArt})" bind:this={node}>
  <div class="overlay">
    <section class="info">
      <strong class="songTitle">{song.name}</strong>
      <span class="songArtist">{song.artists[0].name}</span>
    </section>
  </div>
</div>

<style lang="scss">
  .song {
    display: flex;
    top: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
    position: relative;
    background-size: cover;
    border-radius: 0.25rem;
    overflow: hidden;
    will-change: transform;
    border: none;
    box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
    background-image: var(--coverArt);
    &.show-overlay .overlay {
      opacity: 1;
    }
  }

  button {
    flex: 1;
    box-shadow: none;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    svg {
      pointer-events: none;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    max-width: 100%;
  }

  .overlay {
    display: flex;
    align-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: 100ms ease opacity;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 0.5rem;
    font-size: 0.75rem;
    span {
      margin-top: 0.125rem;
      font-size: 0.5rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>
