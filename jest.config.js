module.exports = {
  testMatch: ['**/+(*.)+test.+ts?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  collectCoverageFrom: ['apps/**/*.{ts,tsx}', 'libs/**/*.{ts,tsx}', '!*.d.ts'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};
