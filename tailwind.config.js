module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100%',
    }),
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: '100%',
    }),
    container: {
      center: true,

      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1440px',
      },
    },
    extend: {
      boxShadow: {
        card: '0 20px 40px rgba(0,0,0,0.12)',
      },
      opacity: { 15: '.15' },
      fontSize: {},
      spacing: {
        460: '28.75rem',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#03001C',
        input: {
          bg: '#03001C',
        },
        secondary: '#19376D',
        base1: '#576CBC',
        base2: '#A5D7E8',
        base3: '#17193c',
      },
      height: {
        screen: '100vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
