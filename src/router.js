import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DaojuList from './views/DaojuList.vue'
import UserList from './views/UserList.vue'
import NoticeList from './views/NoticeList.vue'
import YuanList from './views/YuanList.vue'
import RecordList from './views/RecordList.vue'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'

Vue.use(Router)
const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        },
        {
          path: 'daojuList',
          component: DaojuList
        },
        {
          path: 'userList',
          component: UserList
        },
        {
          path: 'yuanList',
          component: YuanList
        },
        {
          path: 'noticeList',
          component: NoticeList
        },
        {
          path: 'recordList',
          component: RecordList
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})

// 进入路由前方法勾子
// router.beforeEach((to, from, next) => {
//   // to 目标路由
//   // from 源路由
//   // next 跳转到下一个路由
//   let token = localStorage.getItem('token')
//   if (to.meta.isLogin) {
//     if (userId) {
//       next()
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
