import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({ algorithm: 'gzip' }),
    viteCompression({ algorithm: 'brotliCompress' }),
  ],

  base: '/',

  optimizeDeps: {
    include: ['lucide-react', 'aos', 'react-router-dom', 'recharts']
  },

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react', 'react-icons'],
          charts: ['chart.js', 'react-chartjs-2', 'recharts'],
          three: ['three', '@react-three/fiber', '@react-three/drei', '@react-spring/three']
        }
      }
    }
  }
}))
