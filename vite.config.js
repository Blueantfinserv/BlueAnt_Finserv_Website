import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],

  base: command === 'serve' ? '/' : '/BlueAnt_Finserv_Website/',

  optimizeDeps: {
    include: ['lucide-react', 'aos', 'react-router-dom', 'recharts']
  }
}))
