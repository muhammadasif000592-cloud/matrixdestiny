// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://matrixdestiny.co',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'uk'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});