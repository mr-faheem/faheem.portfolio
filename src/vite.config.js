import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/faheem.portfolio/',   // ⚠️ repo ka exact naam
  plugins: [react()],
})
