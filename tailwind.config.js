const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xxl: '1410px',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/forms', {
    strategy: 'base', // only generate global styles
    // strategy: 'class', // only generate classes
  })],
};
