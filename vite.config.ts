import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@components': fileURLToPath(new URL('src/components', import.meta.url)),
      '@design-tokens': fileURLToPath(new URL('src/design-tokens', import.meta.url)),
      '@services': fileURLToPath(new URL('src/services', import.meta.url)),
      '@utils': fileURLToPath(new URL('src/utils', import.meta.url)),
    },
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'icons/*.svg', 'images/*'],
      manifest: {
        name: 'Óticas Coelho — Óculos e Avaliação Visual',
        short_name: 'Óticas Coelho',
        description: 'Veja o mundo com estilo! 20 anos no mercado. Óculos de grau, de sol e avaliação visual.',
        theme_color: '#1B6FF0',
        background_color: '#FFFFFF',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        lang: 'pt-BR',
        categories: ['shopping', 'health'],
        icons: [
          { src: 'icons/icon-72.png', sizes: '72x72', type: 'image/png', purpose: 'maskable any' },
          { src: 'icons/icon-96.png', sizes: '96x96', type: 'image/png', purpose: 'maskable any' },
          { src: 'icons/icon-128.png', sizes: '128x128', type: 'image/png', purpose: 'maskable any' },
          { src: 'icons/icon-144.png', sizes: '144x144', type: 'image/png', purpose: 'maskable any' },
          { src: 'icons/icon-152.png', sizes: '152x152', type: 'image/png', purpose: 'maskable any' },
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable any' },
          { src: 'icons/icon-384.png', sizes: '384x384', type: 'image/png', purpose: 'maskable any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable any' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
});
