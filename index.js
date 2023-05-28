module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
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
    'vue/v-on-function-call': 'error',
  },
};
