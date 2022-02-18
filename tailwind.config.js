const defaultTheme = require('tailwindcss/defaultTheme');

const brandColors = {
  green: '#2b322b',
};

const systemColors = {
  blue: '#007aff',
};

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        ...brandColors,
        ...systemColors,
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
  plugins: [require('@tailwindcss/forms')],
};
