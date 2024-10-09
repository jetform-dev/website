import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: "https://jetform.id",
  integrations: [tailwind(), mdx(), sitemap()],
  adapter: vercel(),
  output: "hybrid"
});
