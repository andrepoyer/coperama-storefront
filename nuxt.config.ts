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
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'es', language: 'es-ES', file: 'es.json', name: 'Español' },
          { code: 'fr', language: 'fr-FR', file: 'fr.json', name: 'Français' }
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'es',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root'
        }
      }
    ]
  ],
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
      },
      link: [
        {
          rel: 'preload',
          href: '/fonts/Montserrat/static/Montserrat-Regular.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/Montserrat/static/Montserrat-Bold.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        }
      ]
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
