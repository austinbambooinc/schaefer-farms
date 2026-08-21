// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://schaeferfarms.netlify.app',
  integrations: [mdx(), sitemap()],
  vite: {
    ssr: {
      noExternal: ["js-yaml"],
    },
  },
});