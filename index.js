module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      ecmaVersion: 6,
    },
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  settings: {
    'import/core-modules': ['vue', 'vuex', 'tailwindcss'],
    'import/resolver': 'nuxt',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
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
