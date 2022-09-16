<template>

    <ul class="todoList">
      <Item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :index="index"></Item>
    </ul>
</template>

<script>
    import Item from './Item'
export default {
    name: '',
    components: {
        Item
    },
    props: ['todos']
}
</script>

<style scoped>
    .todoList {
        list-style-type: none;
        margin-left: -30px;

    }
</style>
