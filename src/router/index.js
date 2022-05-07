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

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition && to.meta.keepAlive) return savedPosition
  return {
    left: 0,
    top: 0
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior
})

export default router
