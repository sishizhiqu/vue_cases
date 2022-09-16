<template>
    <div class="row">
        <h2 v-if="isFirst">欢迎来搜索</h2>
        <h2 v-else-if="isLoading">正在搜索中....</h2>
        <h2 v-else-if="errMsg">404 请求失败</h2>
        <div v-else v-for="(user) in users" :key="user.userurl" class="card">
            <a :href="user.userurl" target="_blank">
                <img :src="user.useravatar" style='width: 100px' />
            </a>
            <p class="card-text">{{ user.username }}</p>
        </div>
    </div>

</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex';
export default {
    name: '',
    /* data() {
        return {
            isFirst: true,
            isLoading: false,
            errMsg: '',
            users: []
        }
    }, */
    /* mounted() {
        this.$bus.$on('searchAjax', this.searchAjax)
    }, */

    computed:{
        ...mapState(['isFirst','isLoading','errMsg','users'])
    },
  /*   methods: {  
        async searchAjax(q) {
            //修改页面显示的状态数据
            this.isFirst = false;
            this.isLoading = true;
            try {
                const response =  await axios({
                    url: 'https://api.github.com/search/users',
                    method: 'GET',
                    params: {
                        q
                    }
                });
                this.isLoading = false;
                // console.log(response);
                this.users = response.data.items.map(item => ({
                    useravatar: item.avatar_url,
                    userurl: item.url,
                    username: item.login
                })).slice(0, 9)
            } catch (error) {
                this.isLoading = false;
                this.errMsg = error.message
            }

    }

} */
}
</script>

<style scoped>
.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>
