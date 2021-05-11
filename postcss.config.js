module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';
  return {
    plugins: [
      require('postcss-fixes'),
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer')
    ]
  };
};
