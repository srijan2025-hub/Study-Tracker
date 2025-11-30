import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// 👇 IMPORTANT: THIS MUST MATCH YOUR GITHUB REPO NAME EXACTLY
const repoName = 'Study-Tracker' 

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Daily Routine Pro',
        short_name: 'RoutinePro',
        description: 'Gamified Study Tracker',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: `/${repoName}/`,
        start_url: `/${repoName}/`,
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
