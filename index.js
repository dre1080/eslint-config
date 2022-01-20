module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'prettier', 'prettier/vue', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
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
