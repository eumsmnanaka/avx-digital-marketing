import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'styled-components', 
      'framer-motion'
    ]
  },
  server: {
    host: '0.0.0.0', 
    port: 3000,      
    strictPort: true,
    open: true
  },
  preview: {
    host: '0.0.0.0', 
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
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.jpeg']
})
