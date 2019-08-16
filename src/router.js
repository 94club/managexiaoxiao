import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Member from './views/Member.vue'
import Page from './views/Page.vue'
import Record from './views/Record.vue'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
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
          path: 'taskList',
          component: Record
        },
        {
          path: 'workOrderList',
          component: Member
        },
        {
          path: 'checkList',
          component: Page
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
