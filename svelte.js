const path = require('path');

module.exports = {
  extends: [path.join(__dirname, 'defaults.js'), 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier' 'svelte3', 'disable'],
  processor: 'disable/disable',
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      settings: {
        'disable/plugins': ['prettier'],
      },
    },
  ],
};
