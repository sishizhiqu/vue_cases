<template>
    <div role="tabpanel" class="tab-pane active" id="home">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
                <!-- <a href="#Message" aria-controls="Message" role="tab" data-toggle="tab">Message</a> -->
                <router-link to="/home/message" aria-controls="Message" role="tab" data-toggle="tab">Message</router-link>
            </li>
            <li role="presentation">
                <!-- <a href="#News" aria-controls="News" role="tab" data-toggle="tab">News</a> -->
                <!-- 这里的路径必须是从哈希路由的根开始写 -->
                <router-link to="/home/news" aria-controls="News" role="tab" data-toggle="tab">News</router-link>
            </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
            <!-- 
                路由组件的生命周期：
                点击链接的时候，创建，切出去的时候销毁，东西不会缓存
                想要缓存，则需要在父组件当中用keep-alive标签
                    include="Message"  包含这个名字（组件对象当中的name值）的组件，会被缓存

             -->
            <keep-alive include="Message">
                <router-view></router-view>
            </keep-alive>
           
           
        </div>
    </div>
</template>

<script>
export default {
    name: '',
}
</script>

<style scoped>

</style>
