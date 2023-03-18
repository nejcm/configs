module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/tests/**/*',
    '!**/types/**/*',
  ],
  coverageReporters: ['json-summary', 'json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules', '^.+\\.module\\.(css|sass|scss)$'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  resetMocks: true,
};
