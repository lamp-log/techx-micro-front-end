import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  preview: {
    port: 5001
  }
})
