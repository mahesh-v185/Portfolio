import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',   // 🔴 IMPORTANT for GitHub Pages project site
  plugins: [react()],
})
