import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)


const state = {
    isFirst: true,
    isLoading: false,
    errMsg: '',
    users: []
}
const mutations = {
    REQUESTING(state) {
        state.isFirst = false
        state.isLoading = true
    },
    REQUESTSUCCESS(state, users) {
        state.isLoading = false
        state.users = users
    },
    REQUESTFAILED(state, errMsg) {
        state.isLoading = false
        state.errMsg = errMsg
    }
}
const actions = {

    //第一个参数一定是context，就算不用也要占位
    async searchAjax({commit},q) {
        
        //修改页面显示的状态数据
        /* this.isFirst = false;
        this.isLoading = true; */
        commit('REQUESTING')

        try {
            const response = await axios({
                url: 'https://api.github.com/search/users',
                method: 'GET',
                params: {
                    q
                }
            });
            // this.isLoading = false;
            let users = response.data.items.map(item => ({
                useravatar: item.avatar_url,
                userurl: item.url,
                username: item.login
            })).slice(0, 9)
            commit('REQUESTSUCCESS',users)
        } catch (error) {
            /* this.isLoading = false;
            this.errMsg = error.message */
            commit('REQUESTFAILED',error.message)
        }
    }
}
const getters = {}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})