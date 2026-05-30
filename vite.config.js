import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, writeFileSync } from 'fs'

// GitHub Pages project site: https://chanalbert545.github.io/frontyardservices/
const REPO_BASE = '/frontyardservices/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? REPO_BASE : '/',
  plugins: [
    react(),
    {
      name: 'github-pages',
      closeBundle() {
        if (command !== 'build') return
        copyFileSync('dist/index.html', 'dist/404.html')
        writeFileSync('dist/.nojekyll', '')
      },
    },
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'vendor-router'
            if (id.includes('react-dom') || id.includes('react/')) return 'vendor-react'
          }
        },
      },
    },
  },
}))
