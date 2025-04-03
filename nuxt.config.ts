// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', [
    '@nuxtjs/google-fonts',
    {
      families: {
        Lexend: [100, 200, 400, 700],
      },
    },
  ], 'nuxt-icon', 'nuxt-gtag', '@nuxtjs/leaflet'],
  ui: {
    icons: ['mdi'],
  },
  // vue: {
  //   compilerOptions: {
  //     isCustomElement: (tag) => tag.startsWith('swiper-'),
  //   },
  // },
  devtools: { enabled: false },
  gtag: {
    id: 'G-1XX6QLRVHJ',
  },
})