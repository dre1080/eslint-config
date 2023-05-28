module.exports = {
  extends: [require.resolve('./index'), '@nuxtjs', 'plugin:nuxt/recommended', 'airbnb-base'],
  settings: {
    'import/core-modules': ['vue', 'vuex', 'tailwindcss'],
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        vue: 'never',
      },
    ],
  },
};
