import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Insomnia',
        short_name: 'Insomnia',
        description: 'App web para aprender inglés con música',
        start_url: '/',
        display: 'standalone',
        background_color: '#003E46',
        theme_color: '#000000',
        icons: [
          {
            src: '/icons/icon.png',
            sizes: '500x500',
            type: 'image/png'
          },
          {
            src: '/icons/icon.png',
            sizes: '500x500',
            type: 'image/png'
          },
          {
            src: '/icons/icon.png',
            sizes: '500x500',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icons/icon.png',
            sizes: '500x500',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
