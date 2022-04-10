import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import User from '../views/user/index.vue'
import Tools from '../views/tools/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'User',
    component: User
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
