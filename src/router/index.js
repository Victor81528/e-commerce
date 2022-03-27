import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop/:type',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    // 未完成
    path: '/shopinfo/:id(\\d+)',
    name: 'Shop_info',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
