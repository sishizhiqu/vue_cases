<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input v-model="username" type="text" class="form-control" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea v-model="content" class="form-control" rows="6" placeholder="评论内容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button @click="handleAdd" type="button" class="btn btn-default pull-right">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      username: '',
      content: ''
    }
  },
  // props: ['addComment'],
  methods: {
    handleAdd() {
      //获取输入的内容，双向数据绑定
      const { username, content } = this
      if (username.trim() && content.trim()) {
        //拼接出评论对象
        let commentObj = { 
          id: Date.now(), 
          username,
          content 
          }
        
        //props
        // this.addComment(commentObj)

        //自定义事件触发，分发，调用回调
        this.$emit('addComment',commentObj)
        
      }else{
        alert('请输入正确的用户名和评论！')
      }

      this.username = '';
      this.content = ''
    }
  }
}
</script>

<style scoped>
</style>
