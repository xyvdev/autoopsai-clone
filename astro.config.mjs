// @ts-check
import { defineConfig } from 'astro/config';

// Static output — Cloudflare Pages serves `dist/` as-is.
export default defineConfig({
  output: 'static',
  site: 'https://autoopsai-clone.pages.dev',
  compressHTML: true,
});
