# Configs

Different config files I use in my projects.

## Configs

- prettier.config.js
- release.config.js
- jest.config.js
- tsconfig.json
- global.d.ts

## Install

```bash
npm install @nejcm/configs --save-dev
```

## Use

Inside your specific config file:

### Eslint

**.eslintrc.js**

```js
const config = require('@nejcm/configs/src/.eslintrc.js');

module.exports = Object.assign(config, {
  // your overriding or other config options
});
```

### Global typescript types

**tsconfig.json**

```json
{
  "include": [
    ...,
    "node_modules/@nejcm/configs/src/global.d.ts"
  ],
   "compilerOptions": {
    ...
  },
}
```

### tsconfig.json

**tsconfig.json**

```json
{
  "extends": "node_modules/@nejcm/configs/src/tsconfig.json",
  "compilerOptions": {
    ...
  },
}
```
