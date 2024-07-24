import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api-jlsm.onrender.com',
        changeOrigin: true,
        
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['@material-ui/core']
    }
  },
})
