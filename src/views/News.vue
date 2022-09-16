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
        <div class="alert alert-success" role="alert">
            <ul class="list-group">
                <router-view></router-view>      
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data(){
        return {
            newsList: [
                {id:1,content:'news01'},
                {id:2,content:'news02'},
                {id:3,content:'news03'},
                {id:4,content:'news04'},
            ]
        }
    },
    methods:{
        toNewsDetail(news){
            // this.$router.push(`/home/news/newsdetail/${news.id}?content=${news.content}`)
            this.$router.push({name:'newsdetail',params:{newsid:news.id},query:{content:news.content}})
        }
    }
}
</script>

<style scoped>

</style>
