<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input v-model="keyword" type="text" placeholder="enter the name you search" />
            <button @click="search">Search</button>
        </div>
    </section>
</template>

<script>
export default {
    name: '',
    data(){
        return {
            keyword:'',
        }
    },
    methods:{
        search(){
            let keyword = this.keyword
            if(keyword.trim()){
                // this.$bus.$emit('searchAjax',keyword)
                //dispatch在触发的时候本质就是在调用actions当中的方法
                //可以传递参数，但是只能传递一个
                //如果有多个，请封装成对象再传
                //{keyword,name:'xxx'}
                this.$store.dispatch('searchAjax',keyword)
            }else{
                alert('请输入合法关键字')
            }

            this.keyword = ''
        }
    }
}
</script>

<style scoped>
</style>
