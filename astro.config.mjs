import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  site: 'https://yaohan0.github.io',
  base: isProduction ? '/portfolio' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
})