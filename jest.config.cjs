/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/demo/',
    '<rootDir>/.rollup.cache/',
    '<rootDir>/node_modules/',
  ],
}
