/* 配置vuex相关的文件 */

//1. 安装vuex
//2. 引入并声明使用
import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

//state是一个包含多个属性（不是方法）的对象，其实就是用来存储数据用的
const state = {
    count: 0
}

//mutations也是一个对象，是一个包含了多个方法的对象，其实就是用这个里面的方法直接操作数据的
//必须是纯函数，不能有if  for  异步
const mutations = {
    INCREMENT(state){
        state.count++
    },
    DECREMENT(state){
        state.count--
    }
}

//actions也是一个对象，是一个包含了多个方法的对象。这个对象内部的方法是用来和vue当中用户的操作去关联的
//可以包含if  for  异步
const actions = {
    //context  上下文对象，本质其实就是store对象
    increment(context){
        context.commit('INCREMENT')
    },
    decrement({commit,state}){
        if(state.count > 0 ) commit('DECREMENT')
    },
    incrementIfOdd({commit,state}){
        if(state.count % 2 !== 0 ) commit('INCREMENT')
    },
    incrementAsync({commit}){
        setTimeout(() => {
            commit('INCREMENT')
        }, 1000);
        
    }
}

//getters也是一个对象，是一个包含了多个方法的对象。这个对象内部的每个方法对应了一个计算属性的get，就是
//通过state当中的已有数据，计算出来的一个新的想要使用的属性数据
const getters = {}

//3. 向外暴露一个store的实例化对象
export default new Vuex.Store({
    //包含了6个核心概念
    //先讲4个
    state,
    mutations,
    actions,
    getters
})


//4. 将暴露出去的store实例化对象引入到实例化Vue的配置对象当中使用


//5. 书写store对象当中的4个核心概念