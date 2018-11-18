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
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn"
  },
  // rules: {
  //   "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
  //   "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  //   "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
  //   "no-empty": process.env.NODE_ENV === "production" ? "error" : "warn",
  //   "no-unreachable": process.env.NODE_ENV === "production" ? "error" : "warn",
  //   semi: ["error", "always"],
  //   "semi-style": ["error", "last"],
  //   "no-extra-semi": "error",
  //   "space-before-function-paren": ["error", "always"],
  //   // vue
  //   "vue/no-unused-components": process.env.NODE_ENV === "production" ? "error" : "warn",
  // },
  parserOptions: {
    parser: "babel-eslint"
  }
};
