<template>
  <div>
    <h2>我爱你赵丽颖</h2>
    <!-- vue当中内置的组件标签 -->
    <slot>
        <!-- 默认插槽，只能有一个 -->
        <!-- slot内部的东西，是等待着父组件使用的时候给传过来 -->
    </slot>

    <slot name="xxx">
        <!-- 具名插槽，可以有无数个 -->
    </slot>

    <slot name="yyy">
        <ul>
            <li>我是第1个</li>
            <li>我是第2个</li>
            <li>我是第3个</li>
        </ul>
    </slot>

    <!-- 无论是默认插槽还是具名插槽，里面都可以写东西，也可以不写东西 -->
    <!-- 如果写了东西，就看你用的时候有没有给slot传递新东西
         如果传递了，slot当中写的东西就会被覆盖   
         如果没传，那么默认显示的就是slot当中的东西
    -->
 </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped>

</style>
