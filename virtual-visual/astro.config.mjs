// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // Tu URL base de GitHub Pages
  site: 'https://cuak123.github.io', 

  // El nombre de tu repositorio
  base: '/LandingPage---Mosso',
});