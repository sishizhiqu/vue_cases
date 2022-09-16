import Vue from "vue";
import App from '@/App'

//完整引入element-ui
/* import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; */
// Vue.use(ElementUI);

//按需引入部分element-ui
import { Button } from 'element-ui';
//全局注册需要的组件
// Vue.component(Button.name, Button);
//或者如下写法
Vue.use(Button)
//element-ui当中的组件分为两大类：按使用方式区分
//组件标签形式的组件
//js代码形式的组件

Vue.config.productionTip = false
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')