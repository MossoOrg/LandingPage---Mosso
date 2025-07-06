// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cuak123.github.io', 
  base: '/LandingPage---Mosso',
  vite: {
    plugins: [tailwindcss()]
  },
  
});