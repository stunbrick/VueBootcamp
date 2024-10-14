import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  test:{
    globals: true,
  },
  plugins: [
    vue(),
      VitePWA(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
