# Configs

Different config files I use in my projects.

## Configs

- prettier.config.js
- global.d.ts

## Install

```bash
npm install @nejcm/configs --save-dev
```

## Use

Inside your specific config file:

**.eslintrc.js**

```js
const config = require('@nejcm/configs/src/.eslintrc.js');

module.exports = Object.assign(config, {
  // your overriding or other config options
});
```

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
