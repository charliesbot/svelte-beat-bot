<script lang="ts">
  import { QueryClientProvider, QueryClient } from "@sveltestack/svelte-query";
  import TopTracks from "./TopTracks.svelte";

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <TopTracks />
</QueryClientProvider>

<style lang="scss">
</style>
