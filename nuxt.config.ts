// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    head: {
      title: 'Denisa - UX/UI Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          key: 'description', 
          name: 'description', 
          content: 'Portfolio Denisy, UX/UI designérky' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.cdnfonts.com/css/sf-pro-display' 
        }
      ]
    },
    baseURL: '/',
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-03-22',
  ui: {
    fonts: true, 
    colorMode: false,
  },
  vite: {
    build: {
      sourcemap: true,
    },
    css: {
      devSourcemap: true,
    }
  },
})