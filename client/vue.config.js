const { defineConfig } = require('@vue/cli-service')
const server = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,

  devServer : {
    port : 8099,
    proxy : {
      '^/api' : {
        target : server,
        changeOrigin : true, 
        pathRewrite : {'^/api' : '/'},
        ws : false,
      }
    }
  }
})
