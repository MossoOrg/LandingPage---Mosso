import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Confirma que tu usuario de GitHub es 'cuak123' (sensible a mayúsculas)
  site: 'https://cuak123.github.io', 

  // Confirma que el nombre del repositorio es EXACTAMENTE este
  base: '/LandingPage---Mosso',

  integrations: [tailwind()]
});