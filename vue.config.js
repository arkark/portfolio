const glob = require("glob-all");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          "./public/index.html",
          "./src/**/*.vue",
          "./src/**/*.js",
          "./node_modules/vuetify/src/**/*.ts"
        ]),
        // workaround
        whitelist: ["align-center", "justify-center"]
      })
    ]
  }
};
