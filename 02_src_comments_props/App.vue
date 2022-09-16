<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :comments="comments" :delComment="delComment"></List>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  name: '',
  data() {
    return {
      comments: [
        { id: 1, content: 'React真不错', user: 'Tom' },
        { id: 2, content: 'React有点难', user: 'Mike' },
        { id: 3, content: '学React不如Vue', user: 'Lisa' },
      ]
    }
  },
  components: {
    Header,
    Add,
    List,
  },
  methods:{
    addComment(comment){
      this.comments.unshift(comment)
    },
    delComment(index){
      this.comments.splice(index,1)
    }
  }
}
</script>

<style scoped>
</style>
