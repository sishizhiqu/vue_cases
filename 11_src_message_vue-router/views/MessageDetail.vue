<template>
    <ul class="list-group">
        <!-- <li class="list-group-item">{{$route.params.msgid}}</li> -->
        <li class="list-group-item">{{msgid}}</li>
        <!-- <li class="list-group-item">{{username}}</li> -->
        <li class="list-group-item">{{title}}</li>
        <li class="list-group-item">{{content}}</li>
    </ul>
</template>

<script>


let msgArr = [
    {id:1 ,title: 'title01'},
    {id:2 ,title: 'title02'},
    {id:3 ,title: 'title03'},
]
export default {
    name: '',
    //路由props映射
    props: ['msgid','username','content'],
    data(){
        return {
            title: ''
        }
    },
    //路由传参共用一个路由组件，mounted只执行了一次
    mounted(){
        this.findTitle()
    },
    //点击三个链接，他们公用的是同一个路由组件，路由组件是同一个，就不会销毁创建
    //点击三个链接的时候，传递的参数不一样，路由组件还是同一个，导致mountde只会执行一次
    //第一次会正常，后面点击的时候title就不会变了
    watch: {
        $route:{
            handler(newVal,oldVal){
                this.findTitle()
            }
            
        }
    },
    methods: {
        findTitle(){
            setTimeout(() => {
                    this.title = msgArr.find(item => item.id === this.msgid).title
                }, 1000);
        }
    }
}
</script>

<style scoped>

</style>
