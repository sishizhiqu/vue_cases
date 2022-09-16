<template>
  <div>
    <!-- <h2>{{count}}</h2> -->
    <p>{{count}}</p>
    <button @click="increment">点击加1</button>
    <button @click="decrement">点击减1</button>
    <button @click="incrementIfOdd">如果是奇数加1</button>
    <button @click="incrementAsync">异步加1</button>
  </div>
</template>

<script>
  //映射
  import {mapActions,mapState} from 'vuex'
export default {
  name: '',
  /* data(){
    return{
      count: 0
    }
  }, */


  //如果是映射方法，无论是actions还是mutations的方法都映射到methods里面
  //如果是映射属性数据，无论是state的数据还是getters当中的方法都映射到computed里面
  //只有名字一样才能映射
  computed:{
    /* count(){
      return this.$store.count
    } */
    
    ...mapState(['count'])
  },
  methods:{
    //这个函数允许传递一个数组，当回调函数名字和actions当中方法名字一样时
    //这个函数返回值是一个对象
    /* {
        increment(){
          // this.count++
          //dispatch 和 emit 都是触发分发的意思
          //分发触发actions当中对应的方法
          this.$store.dispatch('increment')
        },
        decrement(){
          // if(this.count > 0) this.count--
          this.$store.dispatch('decrement')
        },
        incrementIfOdd(){
          // if(this.count % 2 !== 0) this.count++
          this.$store.dispatch('incrementIfOdd')
        },
        incrementAsync(){
            this.$store.dispatch('incrementAsync')
        }
      }
    */

    //用扩展运算符展开对象，因为外面还包裹有一个对象，是es8写法
    //名字一样可以写数组
    //组件里可以直接跟mutations要数据，无需经过actions
    increment(){
        this.$store.commit('INCREMENT')
    },
    ...mapActions(['decrement','incrementIfOdd','incrementAsync'])
    //名字不一样只能写对象，actions里的方法名是iincrement
    /* ...mapActions({
      increment(){
        this.$store.dispatch('iincrement')
      }
    }) */
    
    /* increment(){
      // this.count++
      //dispatch 和 emit 都是触发分发的意思
      //分发触发actions当中对应的方法
      this.$store.dispatch('increment')
    },
    decrement(){
      // if(this.count > 0) this.count--
      this.$store.dispatch('decrement')
    },
    incrementIfOdd(){
      // if(this.count % 2 !== 0) this.count++
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync(){
        this.$store.dispatch('incrementAsync')
    } */
  }
}
</script>

<style scoped>

</style>
