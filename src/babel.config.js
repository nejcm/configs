module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  parserOpts: {strictMode: true},
  plugins: [
    '@babel/plugin-transform-runtime',
    ['babel-plugin-transform-react-remove-prop-types', {mode: 'unsafe-wrap'}],
    'no-side-effect-class-properties',
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['babel-plugin-transform-async-to-promises', {inlineHelpers: true}],
    'babel-plugin-minify-dead-code-elimination',
  ],
};
