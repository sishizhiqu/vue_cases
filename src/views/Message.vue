<template>
    <div role="tabpanel" class="tab-pane active" id="Message">
        <ul class="list-group" >
            <li class="list-group-item" v-for="(message,index) in msgList" :key="message.id">
                <router-link :to="{name:'msgdetail',params:{msgid:message.id},query:{content:message.content}}">{{message.content}}</router-link>
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
            msgList: [
                {id:1,content: 'message01'},
                {id:2,content: 'message02'},
                {id:3,content: 'message03'},
                {id:4,content: 'message04'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
