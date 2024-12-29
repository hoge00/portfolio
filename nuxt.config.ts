// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    '@nuxt/image'
  ],
  image: {
    dir: 'public'
  }
})