# dre1080 ESLint Config

[![npm (scoped)](https://img.shields.io/npm/v/@dre1080/eslint-config)](https://www.npmjs.org/package/@dre1080/eslint-config)

> A sharable eslint config object for [Nuxt.js](https://nuxtjs.org) projects.

## Install

Install [eslint](https://eslint.io/), [prettier](https://prettier.io/) and `@dre1080/eslint-config`:

**With Yarn**

```sh
$ yarn add --dev eslint prettier @dre1080/eslint-config
```

**With npm**

```sh
$ npm install eslint prettier @dre1080/eslint-config --save-dev
```

## Usage

JSON ESLint config example:

```json
{
  "extends": ["@dre1080"]
}
```

Add a prettier config in `package.json`:

```json
"prettier": "@dre1080/prettier-config"
```
