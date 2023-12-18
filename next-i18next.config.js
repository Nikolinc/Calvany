const path = require('path')

module.exports = {
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
  // reloadOnPrerender: process.env.NODE_ENV === 'development',
}
