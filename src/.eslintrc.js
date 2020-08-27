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
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
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
    'import/no-useless-path-segments': 'off',
    'no-eq-null': 'off',
  },
};
