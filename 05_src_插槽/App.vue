<template>
  <div>
    <Child>
      <!-- 默认插槽 -->
      <template>
        <button>点我一次</button>
      </template>

      <!-- 具名插槽 -->
      <template slot="xxx">
        <a href="https://www.baidu.com">点我去百度</a>
      </template>

      <!-- 没写也是没传东西 -->

    
    </Child>

    <Child>
      <template>
        <p>ppp</p>
      </template>

      <template slot="xxx">
        <span>我爱你</span>
      </template>

      <!-- 没传东西 -->
      <template slot="yyy">

      </template>
    </Child>

    <!-- 作用域插槽 -->
    <!-- 数据是由父组件传给子组件去展示的
         子组件展示数据的过程中，数据的结构是由父组件说了算的
    -->
    <!-- 如果是isDone为true的， 前面打√，并且颜色是tomato -->
    <!-- 其实自己的组件可以在子组件去判断，但是外部组件库需要用到插槽，在父组件去判断 -->
    <ScopedChild :todos="todos">
      <!-- slot-scope接收到的是一个对象
           对象：{
            todo:todo
           }
      -->
      <!-- 可以直接解构赋值 -->
      <template slot-scope="{todo}">
      <!-- <template slot-scope="scopeProps"> -->
        <!-- <span v-if="scopeProps.todo.isDone" style="color:tomato">√ {{scopeProps.todo.content}}</span> -->
        <span v-if="todo.isDone" style="color:tomato">√ {{todo.content}}</span>  
      </template>
    
    </ScopedChild>
  </div>
</template>

<script>
import Child from './components/Child'
import ScopedChild from './components/ScopedChild'
export default {
  name: '',
  components:{
    Child,
    ScopedChild
  },
  data(){
    return {
      todos: [
        {id:1,content:'抽烟',isDone:true},
        {id:2,content:'喝酒',isDone:true},
        {id:3,content:'烫头',isDone:false},
      ]
    }
  }
}
</script>

<style scoped>
</style>
