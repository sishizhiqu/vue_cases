<template>

  <input @keyup.enter="handleAdd" v-model="content" type="text" class="addTodo" placeholder="请输入你的任务名称，按回车键确认">

</template>

<script>
export default {
  name: '',
  data(){
    return {
      content: ''
    }
  },
  props:{
    //props第三种写法，也是对象写法，比第二种更严格限定
    //addTodo: Function,  这是第二种写法，只限定了类型
    addTodo: {
      //第三种，这是一个配置对象，它可以限定属性值的更多
      type: Function,
      // required: true,   //是否必须传，一般和default选其一
      // default:       默认值，不传的话默认值就是这个
    }
  },
  methods: {
    handleAdd(){
      //获取内容
      const {content} = this
      if(content.trim()){
        let todoObj = {
          id: Date.now(),
          content,
          isDone: false
        }
        //自定义事件触发
        // this.$emit('addTodo',todoObj)

        //props
        this.addTodo(todoObj)

      }else{
        alert('请输入合法数据')
      }
      this.content = ''
    }
  }
}
</script>

<style scoped>
  .addTodo {
    width: 478px;
    height: 30px;
    border: 1px solid #eee;
    margin: 10px;
    border-radius: 5px;
    outline: none;
  }

  .addTodo:focus {
    border: 1px solid #71aeef;
    box-shadow: 1px 1px 1px #c7d0d9;
  }
</style>
