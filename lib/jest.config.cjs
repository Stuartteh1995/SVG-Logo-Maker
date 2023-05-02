module.exports = {
  transform: {
    '^.+\\.mjs$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(shapes.mjs))',
  ],
  moduleNameMapper: {
    '^\\.\\/(.*)\\.mjs$': '<rootDir>/$1.mjs',
  },
  testRegex: '.*\\.test\\.js$',
  moduleFileExtensions: ['js', 'mjs'],
};
