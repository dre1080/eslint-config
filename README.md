# eslint-config

[![npm (scoped)](https://img.shields.io/npm/v/@dre1080/eslint-config)](https://www.npmjs.org/package/@dre1080/eslint-config)

> Sharable eslint configs.

## Install

Install [eslint](https://eslint.io/), [prettier](https://prettier.io/) and `@dre1080/eslint-config-nuxt`:

**With Yarn**

```sh
$ yarn add --dev eslint prettier @dre1080/eslint-config-nuxt
```

**With npm**

```sh
$ npm install eslint prettier @dre1080/eslint-config-nuxt --save-dev
```

## Usage

JSON ESLint config example:

```json
{
  "extends": ["@dre1080/eslint-config"]
}
```

This package also exposes other configs that can be used for specific types of projects.

[`@dre1080/eslint-config/nuxt`](nuxt.js) for Nuxt.js-based projects:

```json
{
  "extends": ["@dre1080/eslint-config/nuxt"]
}
```

[`@dre1080/eslint-config/svelte`](svelte.js) for Svelte-based projects:

```json
{
  "extends": ["@dre1080/eslint-config/svelte"]
}
```

Add a prettier config in `package.json`:

```json
"prettier": "@dre1080/prettier-config"
```
