const LEVEL = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  rules: {
    "no-console": LEVEL,
    "no-unused-vars": [LEVEL, { argsIgnorePattern: "^_" }],
    "vue/no-unused-components": LEVEL
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
