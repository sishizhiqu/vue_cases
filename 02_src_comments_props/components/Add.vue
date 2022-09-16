<template>

    <div class="col-md-4">
        <form class="form-horizontal">
            <div class="form-group">
                <label>用户名</label>
                <input v-model="user" type="text" class="form-control" placeholder="用户名">
            </div>
            <div class="form-group">
                <label>评论内容</label>
                <textarea v-model="content" class="form-control" rows="6" placeholder="评论内容"></textarea>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button @click="handleAdd" type="button" class="btn btn-default pull-right">提交</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
export default {
    name: '',
    props: ['addComment'],  //props接收到的数据最终也会被vm代理
    data() {
        return {
            user: '',
            content: '',
        }
    },
    methods: {
        handleAdd() {
            //拿到用户输入的数据
            let { user, content } = this
            if (user.trim() && content.trim()) {
                //把数据变为一个对象
                let comment = { id: Date.now(), content, user}
                //把数据添加到comments当中
                //调用父传过来的addComment方法
                this.addComment(comment)
            } else {
                alert('请输入合法的用户名和内容')
            }

            this.user = ''
            this.content = ''
        }
    }
}
</script>

<style scoped>
</style>
