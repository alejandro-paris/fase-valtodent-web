// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// En GitHub Pages la web cuelga de /fase-valtodent-web/. El workflow define ASTRO_BASE y
// ASTRO_SITE; en local y en la preview de la red local se sirve desde la raíz.
export default defineConfig({
  site: process.env.ASTRO_SITE,
  base: process.env.ASTRO_BASE ?? '/',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
