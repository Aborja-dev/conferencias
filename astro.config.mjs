// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node'; // o el adaptador que prefieras


import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: "standalone"
  }),

  output: "server",
  integrations: [react()],
});