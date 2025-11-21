export default defineNuxtConfig({
  compatibilityDate: '2025-11-17',
  ssr: true,
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/fonts'
  ],
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [400, 700],
        display: 'swap'
      }
    ]
  },
  css: ['~/assets/css/base.css'],
  nitro: {
    compressPublicAssets: true,
    minify: true,
    experimental: {
      wasm: true
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es-ES'
      }
    }
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
        ? {
            cssnano: {
              preset: [
                'default',
                {
                  discardComments: { removeAll: true },
                  normalizeWhitespace: true,
                  colormin: true,
                  minifyFontValues: true,
                  minifySelectors: true
                }
              ]
            }
          }
        : {})
    }
  }
})
