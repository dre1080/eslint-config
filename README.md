# dre1080 ESLint Config

[![npm (scoped)](https://img.shields.io/npm/v/@dre1080/eslint-config)](https://www.npmjs.org/package/@dre1080/eslint-config)

> A sharable eslint config object for [Nuxt.js](https://nuxtjs.org) projects.

## Install

Install [eslint](https://eslint.io/), [prettier](https://prettier.io/) and `@dre1080/eslint-config`:

**With Yarn**

```
$ yarn add --dev eslint prettier @dre1080/eslint-config
```

**With npm**

```
$ npm install eslint prettier @dre1080/eslint-config --save-dev
```

## Usage

JSON ESLint config example:

```json
{
  "extends": ["@dre1080"]
}
```

Add a `.prettierrc` config file:

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```
