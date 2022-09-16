const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //禁用ESLint
  lintOnSave: false,

  //配置代理
  devServer:{
    proxy: {
      "/api": {

        //本身： 8080/api/users/info
        //target:代表转发的目标服务器  4000/api/users/info
        //pathRewrite: 4000/api/users/info  和真正的地址多了个/api，需要剁掉

        target: "http://localhost:4000",
        pathRewrite: {"^/api" : ""},
        changeOrigin: true,  //不管改变哪个跨域的条件都会转发
      }
    }
  }
})
