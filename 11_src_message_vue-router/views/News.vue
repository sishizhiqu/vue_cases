<template>
    <div role="tabpanel" class="tab-panel" id="News">
        <ul class="list-group">
            <li class="list-group-item" v-for="(news,index) in newsList" :key="news.id">
                {{news.content}}
                <button @click="toNewsDetail(news)" type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                    autocomplete="off">
                    {{news.id}}
                </button>
            </li>
        </ul>
        <button @click="$router.back()">返回</button>
        <div class="alert alert-success" role="alert">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data(){
        return {
            newsList: [
                {id:1, content: 'newsOne'},
                {id:2, content: 'newsTwo'},
                {id:3, content: 'newsThree'},
            ]
        }
    },
    methods:{
        //编程式导航
        //通过this.$router.push 、this.$router.replace 去进行跳转路由切换页面
        //声明式导航使用标签里的 to 来实现路由跳转切换页面
        toNewsDetail(news){
            //跳转路由切换组件，有历史记录  

            // this.$router.push('/home/news/newsdetail/' + news.id + '?content=' + news.content)
            // this.$router.push(`/home/news/newsdetail/${news.id}?content=${news.content}`)
            // this.$router.push({name:'newsdetail',params:{newsid:news.id},query:{content:news.content}})

            //跳转路由切换组件，没有历史记录  
            this.$router.replace({name:'newsdetail',params:{newsid:news.id},query:{content:news.content}})

        }
    }
}
</script>

<style scoped>

</style>
