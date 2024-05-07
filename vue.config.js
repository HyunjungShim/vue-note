const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/vue-note/",
  transpileDependencies: true,
  outputDir: "docs",
})
