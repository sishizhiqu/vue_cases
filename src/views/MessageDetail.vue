<template>
    <div>
        <li class="list-group-item">{{msgid}}</li>
        <li class="list-group-item">{{content}}</li>
        <li class="list-group-item">{{title}}</li>
    </div>
</template>

<script>
export default {
    name: '',
    props: ['msgid', 'content'],
    data() {
        return {
            msgTitle: [
                { id: 1, content: 'title01' },
                { id: 2, content: 'title02' },
                { id: 3, content: 'title03' },
                { id: 4, content: 'title04' },
            ],
            title: ''
        }
    },
    mounted() {
        this.getTitle()
    },
    watch: {
        $route: {
            handler(newVal, oldVal) {
                this.getTitle()
            }
        }
    },
    methods: {
        getTitle() {
            let curTitle = this.msgTitle.find(item => item.id === this.msgid)
            if(curTitle) this.title = curTitle.content
        }
    }
}
</script>

<style scoped>

</style>
