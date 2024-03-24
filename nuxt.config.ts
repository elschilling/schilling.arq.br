// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    ['@nuxtjs/google-fonts', {
      families: {
        Lexend: [100, 200, 400, 700]
        }
    }],
    'nuxt-icon',
  ],
  ui: {
    icons: ['mdi']
  },
  // vue: {  
  //   compilerOptions: {
  //     isCustomElement: (tag) => tag.startsWith('swiper-'),
  //   },
  // },
  devtools: { enabled: false },
})
