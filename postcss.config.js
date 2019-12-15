const purgecss = require('@fullhuman/postcss-purgecss')({
  // Make sure to configure your own paths here.
  // You need to point to files that will contain tailwind classes
  content: ['./app/**/*.liquid', './src/js/**/*.js'],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const csso = require('postcss-csso')({ comments: false });

module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';
  return {
    plugins: [
      require('postcss-fixes'),
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      prod ? purgecss : undefined,
      prod ? csso : undefined // keep csso after purgecss, or it will break
    ]
  };
};
