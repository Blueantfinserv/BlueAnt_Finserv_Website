import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BlueAnt_Finserv/',

  build: {
    sourcemap: false,
    minify: false,
  }
})
