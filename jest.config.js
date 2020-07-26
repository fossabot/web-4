module.exports = {
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)", "!**/integration/**"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  // transformIgnorePatterns: [`/node_modules/`],
  resolver: "@nrwl/jest/plugins/resolver",
  moduleFileExtensions: ["ts", "js", "html"],
  collectCoverage: true,
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: ["./**/*.{ts,tsx}", "./**/*.{ts,tsx}", "!**/*.d.ts", "!**/*.stories.*"],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  }, 
}
