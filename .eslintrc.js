// const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "extends": ["plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "no-magic-numbers": ERROR,
    quotes: [ERROR, "double"],
  }
}
