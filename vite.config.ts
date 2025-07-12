import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber'],
          postprocessing: ['postprocessing', '@react-three/postprocessing'],
        },
      },
    },
    // Increase chunk size warning limit since Three.js is naturally large
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', 'postprocessing', '@react-three/postprocessing'],
    exclude: ['n8ao'],
  },
})
