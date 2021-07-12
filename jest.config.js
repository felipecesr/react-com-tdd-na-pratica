module.exports = {
  testEnvironment: "jsdom",
  setupFiles: [require.resolve('whatwg-fetch')],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
}
