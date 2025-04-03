import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '@/views/UserList.vue'
import UserInfo from '@/views/UserInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: {name : 'userlist'}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/userList',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/userInfo',
    name: 'userinfo',
    component: UserInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
