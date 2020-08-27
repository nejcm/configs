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
import config from '@nejcm/configs/src/.eslintrc.js';
export default {
  ...config,
  // your overriding or other config options
};
```
