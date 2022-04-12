import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/shop/:type',
  //   name: 'Shop',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  // },
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
