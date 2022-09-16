<template>

    
    <li :class="{active:mouseIn}" @mouseenter="mouseIn = true" @mouseleave="mouseIn = false">
        <!-- 第一种写法，直接用todo.isDone来判断是否选中 -->
        <input @click="handleCheck" type="checkbox" class="itemCheck" :checked="todo.isDone">
        
        <!-- 第二种写法，用自己的标识来判断是否选中，双向数据绑定 -->
        <!-- checkbox的两种用法：
                1. 多个复选框一组，那么此时每个复选框需要设置value属性值，最终收集数据到一个数组当中
                2. 单个复选框使用，不需要设置value属性，v-model操作的是checked属性值
        -->
        <!-- <input type="checkbox" class="itemCheck" v-model="isChecked"> -->
        
        <span>{{ todo.content }}</span>
        <input v-show="mouseIn" @click="handleDel" type="button" value="删 除" class="itemDel">
    </li>
</template>

<script>
    import PubSub from 'pubsub-js'
export default {
    name: '',
    props: {
        //第二种写法，写对象，可以对传递过来的属性值的类型进行限定
        todo: Object,
        index: {
            type: Number,
            default: 0
        },
        
    },

    //data当中不能出现this！
    data() {
        return {
            mouseIn: false,
        }
    },
   /*  computed: {
        isChecked: {
            get() {
                return this.todo.isDone
            },
            set() {

            }
        }
    }, */
    methods: {
        handleCheck(){
            //props
            // this.updateTodo(this.index)
           
            //消息的发布
            PubSub.publish('updateTodo',this.index)

        },
        handleDel(){
            //触发全局事件总线的事件
            if(confirm('确认删除吗？')) this.$bus.$emit('delTodo',this.index)
        }
    }
}
</script>

<style scoped>

.active{
    background: #ccc;
}

li {
    border: 1px solid #eee;
    border-top: none;
    width: 478px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    position: relative;
    cursor: pointer;
}

li:first-child {
    border-top: 1px solid #eee;
    border-radius: 5px 5px 0 0;
}

li:last-child {
    border-radius: 0 0 5px 5px;
}

.itemCheck {
    margin-right: 5px;
}

.itemDel {
    position: absolute;
    right: 10px;
    position: absolute;
    right: 10px;
    width: 50px;
    height: 24px;
    top: 3px;
    color: #fff;
    background: #e34f4f;
    outline: none;
    border: none;
    /* display: none; */
    border-radius: 5px;
    cursor: pointer;
}
</style>
