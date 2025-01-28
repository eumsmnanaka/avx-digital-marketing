import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acesso de qualquer IP
    port: 3000,      // Mudei para porta 3000
    strictPort: true,
    open: true
  },
  preview: {
    host: '0.0.0.0', // Permite acesso de qualquer IP no preview
    port: 4173,
    strictPort: true,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets'
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.jpeg'],
  optimizeDeps: {
    include: ['**/*.jpg', '**/*.png', '**/*.svg']
  }
})
