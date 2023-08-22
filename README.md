# Configs

Different usefull config files I use in my projects and other settings, templates, ...

## Install

```bash
npm install @nejcm/configs --save-dev
# OR
yarn add -D @nejcm/configs
```

## Included

### Configs

- [prettier.config.js](./src/prettier.config.js)
- [release.config.js](./src/release.config.js)
- [jest.config.js](./src/jest.config.js)
- [tsconfig.json](./src/tsconfig.json)
- [global.d.ts](./src/prettier.config.js)

### Github

- [README](./src/github/README.md)

### VSCode

- [README](./src/vscode/README.md)

## Use

Inside your specific config file:

**.eslintrc.js**

```js
const config = require("@nejcm/configs/src/.eslintrc.js");

module.exports = Object.assign(config, {
  // your overriding or other config options
});
```

**tsconfig.json**

```json
{
  "extends": "./node_modules/@nejcm/configs/src/tsconfig.json",
  "compilerOptions": {
    ...
  },
}
```

**global.d.ts**

```json
{
  "compilerOptions": {
    "types": ["@nejcm/configs/src/global.d.ts"]
  }
}
```
