<template>
    <div class="countWrap">
        <input v-model="isCheckAll" type="checkbox" class="checkAll">
        <div class="count">
            <span>已完成</span> <i class="doneNum">{{doneNum}}</i>
            <span>/&nbsp;全部</span> <i class="todoNum">{{sum}}</i>
        </div>
        <input @click="handelDelDone" type="button" value="清除已完成任务" class="removeDone">
    </div>
</template>

<script>
export default {
    name: '',
    props: ['todos','checkAll','delAllDone'],
    computed:{
        doneNum(){
            // return this.todos.filter(todo=>{return todo.isDone===true}).length
            return this.todos.reduce((preValue,current)=>{return preValue + (current.isDone? 1 : 0)},0)
        },
        sum(){
            return this.todos.length
        },
        isCheckAll:{
            get(){
                return this.doneNum === this.sum && this.allNum > 0
            },
            set(isCheckAll){
                //给所有todo勾选
                this.checkAll(isCheckAll)
            }
        }
    },
    methods: {
        handelDelDone(){
            if(confirm('确认删除所有已完成吗？')) this.delAllDone()
        }
    }

}
</script>

<style scoped>
.countWrap {
    margin: 30px 10px 20px;
    width: 480px;
    overflow: hidden;
}

.checkAll {
    float: left;
    height: 25px;
    line-height: 20px;
}

.count {
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-left: 20px;
}

.removeDone {
    float: right;
    width: 120px;
    height: 30px;
    color: #fff;
    background: #e34f4f;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
