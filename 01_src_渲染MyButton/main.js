
import Vue from 'vue'   //默认引入的就是runtime-only的版本，不带解析器
//import Vue from 'vue/dist/vue.esm.js' //该版本是带解析器的版本
import App from '@/App.vue' 

Vue.config.productionTip = false


//我们现在默认导入的Vue是一个  runtime-only版本的Vue,这个版本的vue不带解析器
//默认导入的可以去这个包内的package.json里的main 看是谁
/* new Vue({
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app') */



//以后我们用的是这种
//打包出来的体积小
new Vue({
  /* 
    该函数和上面我们自己写的功能差不多
      1. 定义并注册了App
      2. 使用了App组件
      3. 比上面的写法多干了一件事，就是寻找解析器的loader
  */
  render: h => h(App) 

}).$mount('#app')