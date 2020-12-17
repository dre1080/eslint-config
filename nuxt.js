module.exports = {
  extends: [require.resolve('./index'), '@nuxtjs', 'plugin:nuxt/recommended'],
  settings: {
    'import/core-modules': ['vue', 'vuex', 'tailwindcss'],
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
