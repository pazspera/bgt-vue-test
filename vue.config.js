const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/boardgame": {
        target: process.env.VUE_APP_API_PROXY,
        changeOrigin: true,
        secure: false,
        headers: {
          Referer: process.env.VUE_APP_API_PROXY,
        },
      },
    },
  },
});
