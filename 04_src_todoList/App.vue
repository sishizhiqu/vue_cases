<template>
  <div class="wrap">
    <!-- 给组件绑定自定义事件 -->
    <!-- <Header @addTodo="addTodo"></Header> -->
    <!-- 给组件传递方法 -->
    <Header :addTodo="addTodo"></Header>
    <!-- props -->
    <!-- <List :todos="todos" :delTodo="delTodo" :updateTodo="updateTodo"></List> -->
   
    <!-- 全局事件总线delTodo 和 pubSub的updateTodo -->
    <List :todos="todos" ></List>

    <Footer :todos="todos" :checkAll="checkAll" :delAllDone="delAllDone"></Footer>

  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  name: '',
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    }
  },
  components: {
    Header,
    List,
    Footer
  },
  mounted(){
    //在App当中找到总线，给总线绑定事件
    this.$bus.$on('delTodo',this.delTodo)
    //消息订阅，处理updateTodo
    PubSub.subscribe('updateTodo',this.updateTodo)
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj)
    },
    delTodo(index) {
      this.todos.splice(index, 1)
    },
    //msg是消息订阅和发布 传递过来的消息名，即使不用也要占位
    updateTodo(msg,index) {
      this.todos[index].isDone = !this.todos[index].isDone
    },
    //全选全不选
    checkAll(isCheckAll) {
      this.todos.forEach(todo => todo.isDone = isCheckAll)
    },
    //删除已选中
    delAllDone() {
      this.todos = this.todos.filter(todo => !todo.isDone)
    }
  },
  watch: {

    todos: {
      //设置深度监视
      //一般监视监视的是数组本身的数据，但是数组内部对象的数据监视不到
      //深度监视可以监视到数组本身的数据和数组内部对象的数据
      deep: true,
      handler(newVal, oldVal) {
        //只要todos数据发生变化，就把变化后的数据存储到localStorage当中
        //localStorage 是前端本地存储的方案，是一个小型的数据库，存储到localStorage中的东西都会自动转化为字符串
        //localStorage中有4个API
        // localStorage.setItem('键','值')  //给localStorage存储数据
        // localStorage.getItem('键')   //获取localStorage当中某个数据,获取不到就返回null
        // localStorage.removeItem('键')  //删除localStorage当中某个数据
        // localStorage.clear()   //清空localStorage所有数据



        //对象数据类型转基本数据类型
        //计算  比较  全部转基本
        //判等的时候   判等如果都是对象，判地址，如果有一个不是对象，转基本

        //1. 数组转基本   中括号变引号，转字符串 [1,2,3] =>  "1,2,3"
        //2. 对象转基本   固定的 '[object object]'
        //3. 函数转基本   固定的  函数整体变为字符串


        //直接传对象，会转基本，需要转成JSON
        localStorage.setItem('TODOS_KEY', JSON.stringify(newVal))
      }
    }
  }
}
</script>


<!-- scoped,当前的css只在该文件生效 -->
<!-- scoped，作用域 -->
<style scoped>
.wrap {
  width: 500px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 10px;
}
</style>
