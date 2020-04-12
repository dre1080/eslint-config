const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, 'defaults.js'),
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  settings: {
    'import/core-modules': ['vue', 'vuex', 'tailwindcss'],
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  rules: {
    'vue/attributes-order': 'error',
    'vue/camelcase': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/max-len': [
      'error',
      {
        code: 100,
        template: 100,
        tabWidth: 2,
        comments: 100,
      },
    ],
    'vue/no-reserved-component-names': 'error',
    'vue/order-in-components': 'error',
    'vue/v-on-function-call': 'error',
  },
};
