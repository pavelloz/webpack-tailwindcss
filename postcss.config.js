module.exports = () => {
  return {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production' ? 'postcss-minify' : false,
    ]
  };
};
