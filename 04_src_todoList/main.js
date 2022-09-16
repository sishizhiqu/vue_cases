import Vue from "vue";
import App from '@/App'

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this //配置总线，就是把vm挂到Vue的原型上，让所有组建都能找到它，进而调用$on、$emeit
  },
  render: h => h(App)
}).$mount('#app')