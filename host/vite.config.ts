import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: 'host',
    //   remotes: {
    //     remote: 'http://localhost:5001/assets/remoteEntry.js',
    //   },
    //   shared: ['react', 'react-dom', 'react-router-dom'],
    // }),
  ],
  // build: {
  //   modulePreload: false,
  //   target: 'esnext',
  //   minify: false,
  //   cssCodeSplit: false,
  // },
  server: {
    port: 5000
  }
})
