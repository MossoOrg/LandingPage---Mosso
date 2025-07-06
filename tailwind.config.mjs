/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        fontFamily: {
          // La fuente por defecto será Roboto
          sans: ["Roboto", "sans-serif"],
          // Añadimos una fuente personalizada para el logo
          mplus: ["'M PLUS Rounded 1c'", "sans-serif"],
        },
      },
    },
    plugins: [],
  };