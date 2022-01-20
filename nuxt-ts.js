const base = require('./index');

module.exports = {
  parserOptions: {
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'airbnb-typescript/base',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  settings: {
    'import/core-modules': ['vue', 'vuex', 'tailwindcss'],
    'import/resolver': {
      nuxt: {
        extensions: ['.ts', '.js', '.vue'],
      },
    },
  },
  rules: base.rules,
};
