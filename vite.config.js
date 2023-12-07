import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import path from 'node:path';

const pathAd = path.resolve(__dirname, 'node_modules/@quais/contracts/lib.esm/index.js')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    exclude: [
      pathAd
    ]
  })],
})
