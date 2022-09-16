import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import MessageDetail from '@/views/MessageDetail'
import News from '@/views/News'
import NewsDetail from '@/views/NewsDetail'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'msgdetail/:msgid',
                            component: MessageDetail,
                            name: 'msgdetail',
                            props(route){
                                return {msgid:route.params.msgid,content:route.query.content}
                            }
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
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '',
            redirect: '/home/message'
        }

    ]
})