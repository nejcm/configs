# Configs

Different config files I use in my projects.

## Types

- .eslintignore
- .eslintrc.js
- .gitignore
- .prettierignore
- babel.config.js
- jest.config.js
- lint-staged.config.js
- prettier.config.js
- release.config.js
- tsconfig.json

## Install

```bash
npm install @nejcm/configs --save-dev
```

## Use

Inside your specific config file:

```js
// .eslintrc.js
const config = require('@nejcm/configs/src/.eslintrc.js');

module.exports = Object.assign(config, {
  // your overriding or other config options
});
```
