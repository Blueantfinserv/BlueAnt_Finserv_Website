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
          icons: ['lucide-react', 'react-icons'],
          motion: ['framer-motion'],
          recharts: ['recharts'],
          chartjs: ['chart.js', 'react-chartjs-2']
        }
      }
    }
  }
}))
