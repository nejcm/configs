module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'kentcdodds',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.md'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'no-bitwise': 'off',
    'no-negated-condition': 'off',
    'arrow-parens': 'error',
    'generator-star-spacing': 'off',
    'no-console': 'warn',
    'no-eval': 'error',
    'no-debugger': 'warn',
    'no-unused-vars': 'error',
    eqeqeq: 'off',
    'no-eq-null': 'off',
    'import/no-useless-path-segments': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
