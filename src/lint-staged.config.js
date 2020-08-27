module.exports = {
  '*.(js|jsx|ts|tsx)': [
    'eslint',
    'cross-env CI=true jest --env=jsdom --findRelatedTests',
  ],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
};
