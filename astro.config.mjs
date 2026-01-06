import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. ADD YOUR SITE URL (Crucial for GitHub Pages + Custom Domain)
  // Replace with your actual Aliyun domain
  site: 'https://www.zoonotfound.com', 
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  // 2. SIMPLIFIED i18n (Removed 'cn' since you don't have the Chinese version anymore)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  }
});