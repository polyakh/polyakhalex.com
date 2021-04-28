module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/testSetup/jest-preprocess.js",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^~components(.*)$": "<rootDir>/src/components/$1",

  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
};
