// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  output: "static",
  adapter: vercel(),
  site: "https://mmaeder.com",
  integrations: [sitemap()],
});
