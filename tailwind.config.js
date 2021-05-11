const defaultTheme = require('tailwindcss/defaultTheme');

const brandColors = {
  green: '#2b322b',
};

const systemColors = {
  blue: '#007aff',
};

module.exports = {
  mode: 'jit',
  purge: {
    mode: 'all',
    content: ['./src/**/*.html', './src/**/*.liquid', './src/js/**/*.js'],
  },
  theme: {
    extend: {
      colors: {
        // `ex` prefix will create classes like `text-ex-red`
        // Remove `ex` if you dont want prefix
        ex: {
          ...brandColors,
          ...systemColors,
        },
      },
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
  plugins: [require('@tailwindcss/custom-forms')],
};
