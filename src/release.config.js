module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/npm',
  ],
  publish: ['@semantic-release/github', '@semantic-release/npm'],
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
