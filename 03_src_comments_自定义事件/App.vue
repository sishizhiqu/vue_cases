<template>
    <div>
      <Header></Header>
    <div class="container">
      <!-- props通信 -->
      <!-- <Add :addComment="addComment"></Add> -->

      <!-- 自定义事件通信，麻烦写法 -->
      <!-- <Add ref="addEl"></Add> -->

      <!-- 自定义事件通信，简单写法，直接自定义事件了，底层跟上面是一样的 -->
      <!-- 常用 -->
      <Add @addComment="addComment"></Add>
      
      <List :comments="comments" :delComment="delComment"></List>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Add from './components/Add';
  import List from './components/List'
export default {
  name: '',
  data(){
    return {
      comments: [
        {id:1,username:'Tom',content:'React真香!'},
        {id:2,username:'Sam',content:'React太难了!'},
        {id:3,username:'Mike',content:'React不如Vue'},
      ]
    }
  },
  components: {
    Header,
    Add,
    List
  },

  //自定义事件麻烦写法
  //挂载完成就给Add组件绑定一个自定义事件
  /* mounted(){
    //对Add组件对象绑定自定义事件
    //如果把$on 换成 $once 则该事件只能触发一次
    this.$refs.addEl.$on('addComment',this.addComment)
  }, */
  methods: {
    addComment(obj){
      this.comments.unshift(obj)
    },
    delComment(index){
      this.comments.splice(index,1)
    }
  }
}
</script>

<style scoped>

</style>
