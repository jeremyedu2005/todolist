import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      manifest: {
        name: 'Todolist App',
        short_name: '',
        description: '',
        start_url: '/todolist/',
        display: 'standalone',
        theme_color: '#3100ff',
        background_color: '#fff',
        icons: [
          {
            src: '/todolist/todolist-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/todolist/todolist-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/todolist/todolist-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/todolist/todolist-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  base: '/todolist/',
});
