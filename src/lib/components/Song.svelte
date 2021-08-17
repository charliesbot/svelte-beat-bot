<script lang="ts">
  import type { SongType } from "$lib/types";
  import mediaTracker from "$lib/utils/mediaTracker";

  export let node: HTMLElement;
  export let size: number;
  export let song: SongType;

  const { album, previewUrl } = song;
  const coverArt = album.images[1].url;

  function toggleSong() {
    mediaTracker.playSong(previewUrl);
  }
</script>

<div
  class="song"
  style="
    --size:{size}px;
    --coverArt:url({coverArt});
  "
  bind:this={node}
>
  <div class="overlay">
    <section class="info">
      <strong class="songTitle">{song.name}</strong>
      <span class="songArtist">{song.artists[0].name}</span>
    </section>
    {#if previewUrl !== undefined}
      <section class="actions">
        <button on:click={toggleSong}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="play"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-play fa-w-14 fa-2x"
            ><path
              fill="currentColor"
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              class="play-icon"
            /></svg
          >
        </button>
      </section>
    {/if}
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
    height: 50px;
    width: 50px;
    svg {
      width: 20px;
      color: white;
      pointer-events: none;
    }
  }

  section.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    max-width: 100%;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 100%;
    margin: 0px;
    padding: 0px;
    position: absolute;
    left: 0px;
    bottom: 0px;
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
    transition: 300ms ease opacity;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 0.5rem;
    font-size: 0.75rem;
    span {
      margin-top: 0.125rem;
      font-size: 0.5rem;
    }
  }
</style>
