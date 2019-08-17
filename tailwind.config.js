const defaultTheme = require('tailwindcss/defaultTheme');

const brandColors = {
  'green-light': '#14ddaa',
  'green-mid': '#179c7b',
  'green-dark': '#2b322b',
  'soft-grey': '#f0f3f6',
  'mid-grey': '#ced8e1',
  'grey': '#7b838a',
  'dark-grey': '#333333'
};

const systemColors = {
  'blue': '#007aff',
  'light-blue': '#5bc8fa',
  'red': '#ff3a30',
  'orange': '#ff9e0b',
  'yellow': '#ffd70b',
  'purple': '#bf59f2'
};

module.exports = {
  theme: {
    extend: {
      colors: {
        gs: {
          ...brandColors,
          ...systemColors
        }
      },
      fontFamily: {
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      screens: {
        xxl: '1410px'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
};
