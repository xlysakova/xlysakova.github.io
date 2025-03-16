// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    // Add any Nuxt modules you need here
  ],
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  }
})