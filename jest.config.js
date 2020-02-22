module.exports = {
  roots: ["<rootDir>"],
  setupFiles: ["./setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["node_modules/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: ["**/*.spec.(ts|tsx)"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
