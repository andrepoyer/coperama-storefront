export default defineNuxtConfig({
  compatibilityDate: '2025-11-17',
  ssr: true,
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/strapi',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-svgo',
    'nuxt-auth-utils'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {
    sapApiBaseUrl: '',
    sapClientId: '',
    sapClientSecret: '',
    strapi: {
      url: process.env.STRAPI_URL || 'http://localhost:1337'
    }
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
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=block'
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
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
  },
  svgo: {
    autoImportPath: './assets/icons',
    componentPrefix: 'i',
    defaultImport: 'component',
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false
            }
          }
        },
        {
          name: 'convertColors',
          params: {
            currentColor: true
          }
        }
      ]
    }
  }
})
