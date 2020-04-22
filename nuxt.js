module.exports = {
  extends: [require.resolve('./index.js')],
  settings: {
    'import/core-modules': ['vue', 'vuex', 'tailwindcss'],
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
