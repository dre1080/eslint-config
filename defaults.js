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
  extends: ['airbnb-base'],
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
