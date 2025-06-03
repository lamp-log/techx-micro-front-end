import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import federation from '@originjs/vite-plugin-federation'
// import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // dts({
    //   insertTypesEntry: true,
    //   outDir: 'dist/@mf-types',
    //   include: ['src/**/*.ts', 'src/**/*.tsx'],
    //   exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    // }),
    // federation({
    //   name: 'remote',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './Button': './src/components/Button',
    //     './Counter': './src/components/Counter',
    //     './UserContext': './src/contexts/UserContext',
    //     './routes': './src/routes/index',
    //   },
    //   shared: ['react', 'react-dom', 'react-router-dom'],
    // }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  preview: {
    port: 5001,
  },
})
