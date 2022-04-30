import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:group/:type',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue'),
    props: true
  },
  {
    path: '/shopinfo/:id(\\d+)',
    name: 'Shop_info',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopInfo.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
