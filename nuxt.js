const { join } = require('path');

module.exports = {
  extends: join(__dirname, 'index.js'),
  settings: {
    'import/core-modules': ['vue', 'vuex', 'tailwindcss'],
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
