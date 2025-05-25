module.exports = {
    preset: "jest-expo",
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?react-native|@react-native|react-redux|expo(nent)?|@expo(nent)?/.*)",
    ],
    setupFiles: ["<rootDir>/jest.setup.js"],
    testMatch: ["**/*.test.js"]
  };
  