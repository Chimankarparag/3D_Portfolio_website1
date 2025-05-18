import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  base: "/3D_Portfolio_website1/", 
  server: {
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },

})
