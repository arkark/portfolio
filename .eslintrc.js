const level = process.env.NODE_ENV === "production" ? "error" : "warn";

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
    "no-console": level,
    "no-unused-vars": [
      level,
      { "argsIgnorePattern": "^_" }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
