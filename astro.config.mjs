import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // This tells Astro to use the new Tailwind v4 engine
  vite: {
    plugins: [tailwindcss()],
  },
  // Setting up the bilingual routes we planned
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cn'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});