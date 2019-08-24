const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./app/**/*.liquid', './modules/**/*.liquid', './src/js/**/*.js'],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';
  return {
    plugins: [
      require('postcss-fixes'),
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      prod ? purgecss : undefined // make sure all the classes are present in dev
    ]
  };
};
