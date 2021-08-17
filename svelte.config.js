import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: vercel(),
    vite: {
      optimizeDeps: {
        include: ["broadcast-channel"],
        exclude: ["reflect-metadata"],
      },
    },
  },
};

export default config;
