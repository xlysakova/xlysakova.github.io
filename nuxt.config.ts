import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ui: {
    fonts: false,
    colorMode: true
  },
  colorMode: {
    preference: 'light'
  },
  fonts: {
    families: [
      { name: 'Poppins', provider: 'google' },
    ],
  },
})