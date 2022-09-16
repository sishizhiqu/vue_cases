import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import News from '@/views/News'
import MessageDetail from '@/views/MessageDetail'
import NewsDetail from '@/views/NewsDetail'
Vue.use(VueRouter)

export default new VueRouter({
    // mode:'hash',
    //配置路由
    routes:[
        {
            path: '/home',
            component: Home,  //注册路由组件
            children: [
                {
                    //注意这里二级路由，可以不写完整路径，前面的/也可以省去
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            // :msgid是用来接收路径传过来的params参数
                            //匹配的同时把参数给解析出来，添加到当前这个路由对象当中
                            path: 'msgdetail/:msgid',
                            component: MessageDetail,
                            name: 'msgdetail', //命名路由
                            
                            /* props
                                1. 如果写的是布尔值，true代表会把传递过来的路径当中的params参数映射为要显示的组件当中属性去使用
                                2. 如果写对象，props是用来把需要自己额外传递的静态数据映射为组件当中的属性，
                                   这个用法只能传递一些自己添加的额外数据，query和params不行
                                3. 如果写函数，则可以让我们自己把params参数和query参数一起映射
                                    - 默认传一个参数，是当前路由对象
                                
                                */
                            // props: true   
                            // props: {username: '赵丽颖'}
                            props(route){
                                return {msgid:route.params.msgid, content:route.query.content}
                            }


                            //以下这个不用写，传参的时候会自动被解析出来
                           /*  params: {},
                            query:{} */
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            path: 'newsdetail/:newsid',
                            component: NewsDetail,
                            name: 'newsdetail'
                        }
                    ]
                },
               /*  {
                    path: '',
                    redirect: 'message'
                } */
            ]
        },
        {
            path: '/about',
            component: About
        },
        //重定向路由
        {
            path: '/',
            redirect: '/home/message'
        },
        
    ]

})