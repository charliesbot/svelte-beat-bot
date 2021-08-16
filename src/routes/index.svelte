<script lang="ts">
  import TopTracks from "./TopTracks.svelte";

  import { initClient } from "@urql/svelte";

  initClient({
    url: "http://localhost:3000/graphql",
    fetchOptions: () => {
      const token = "";
      return {
        headers: { authorization: token ? `Bearer ${token}` : "" },
      };
    },
  });
</script>

<TopTracks />

<style lang="scss">
</style>
