<template>
    <div>
        <li class="list-group-item">{{$route.params.newsid}}</li>
        <li class="list-group-item">{{$route.query.content}}</li>
    </div>
</template>

<script>
export default {
    name: '',
}
</script>

<style scoped>

</style>
