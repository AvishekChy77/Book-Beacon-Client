import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // same-origin proxy for local dev: the browser talks to /bb-api on
    // localhost, vite forwards to the real API, so CORS never applies
    proxy: {
      '/bb-api': {
        target: 'https://book-beacon-server.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bb-api/, ''),
      },
    },
  },
})
