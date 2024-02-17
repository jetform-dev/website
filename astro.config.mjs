import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://0491-180-254-226-223.ngrok-free.app",
  integrations: [tailwind(), mdx(), sitemap()],
});
