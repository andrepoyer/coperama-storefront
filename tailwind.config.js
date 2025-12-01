/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js,ts}', './app.vue'],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: '#18988B',
            dark: '#1A6D65'
          },
          secondary: {
            DEFAULT: '#294459',
            dark: '#162A36'
          },
          accent: {
            DEFAULT: '#8F003E',
            dark: '#650013'
          },
          neutral: {
            extraLight: '#E5E5E5',
            light: '#999999',
            dark: '#000000'
          }
        },

        business: {
          ecoperama: '#8DC63F',
          lifestyle: '#4E7FB8',
          food: '#BE3A6A',
          hotels: '#A45DA4',
          international: '#A39161'
        },

        ui: {
          bg: '#FFFFFF',
          surface: '#F8F8F8',
          border: '#E5E5E5',

          text: {
            primary: '#1A1A1A',
            secondary: '#666666',
            inverted: '#FFFFFF'
          },

          feedback: {
            success: '#4CAF50',
            warning: '#FFC107',
            error: '#D32F2F',
            info: '#4E7FB8'
          }
        }
      },

      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        title: ['Montserrat', 'sans-serif']
      },

      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px'
      },

      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px'
      },

      boxShadow: {
        card: '0 4px 10px rgba(0,0,0,0.05)',
        strong: '0 8px 20px rgba(0,0,0,0.1)'
      }
    }
  },

  plugins: [require('tailwindcss-animate'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
}
