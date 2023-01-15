import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.join(__dirname, 'src/pages'),
      '@components': path.join(__dirname, 'src/components'),
    },
  },
})
