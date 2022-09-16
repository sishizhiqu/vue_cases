<template>
    <div role="tabpanel" class="tab-pane active" id="Message">
        <ul class="list-group">
            <li class="list-group-item" v-for="(message,index) in messages" :key="message.id">
                <!-- <a href="##">message01</a> -->
                <!-- <router-link to="/home/message/msgdetail">{{message.content}}</router-link> -->
                <!-- 路由传参写法
                        - params参数和query参数。params参数是路径的一部分，query参数不占路径
                    
                -->
                <!-- 1. 路径的原始写法，字符串拼接 -->
                <!-- 加了ID，则路径不一样了，所以不会全部active，背景色全变 -->
                <!-- <router-link :to="'/home/message/msgdetail/' + message.id + '?content=' + message.content">{{message.content}}</router-link> -->
                <!-- 1.2. 模板字符串拼接 -->
                <!-- <router-link :to="`/home/message/msgdetail/${message.id}?content=${message.content}`">{{message.content}}</router-link> -->

                <!-- 2. 路径的对象写法，命名路由 -->
                <router-link :to="{name:'msgdetail',params:{msgid:message.id},query: {content: message.content}}" >{{message.content}}</router-link>
            </li>
        </ul>
        <input type="text">
        <div class="alert alert-success" role="alert">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data(){
        return {
            messages: [
                {id:1,content:'message01'},
                {id:2,content:'message02'},
                {id:3,content:'message03'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
