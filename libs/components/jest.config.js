module.exports = {
  name: "components",
  displayName: "components",
  preset: "../../jest.config.js",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { cwd: __dirname, configFile: "./babel-jest.config.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html"],
  coverageDirectory: "../../coverage/libs/components",
  collectCoverage: true,
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: ["apps/research/**/*.{ts,tsx}", "libs/components/**/*.{ts,tsx}", "!**/*.d.ts", "!**/index.ts"],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
}
