<script lang="ts">
  import TopTracks from "./TopTracks.svelte";

  import { initClient } from "@urql/svelte";

  initClient({
    url: "http://localhost:3000/graphql",
    fetchOptions: () => {
      const token =
        "BQB8z0ydw1fMFEWzpnjxLbpfj_TdpOnL1q1deSo5tvcOlqvi4vFesQduHHd7i5o2qJGhDQFn4Te60BhY-LFtNQ2oYRZUC2sQd2DXv7ngjWfOxUainoSTayloX_RaAtK1wely5N0c6Qh-PKCBABob-J9tUz_59FNc-wVGs6GCbte98YLvVgwc";
      return {
        headers: { authorization: token ? `Bearer ${token}` : "" },
      };
    },
  });
</script>

<TopTracks />

<style lang="scss">
</style>
