import type { Config } from 'tailwindcss'

export default {
  safelist: ['primary', 'secondary'],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './node_modules/@nuxt/ui/dist/**/*.{js,vue,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C25874', // Your primary color
        secondary: '#00CAE9'
      }
    }
  },
  plugins: [],
} satisfies Config