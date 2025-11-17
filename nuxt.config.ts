export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      sapCommerceBaseUrl: process.env.SAP_COMMERCE_BASE_URL || ''
    }
  },
  css: ['~/assets/css/tailwind.css'],
})
