import { createStore } from 'vuex'
import banner from './banner'
import products from './products'
import slidecard from './slidecard'
import favorite from './favorite'
import cart from './cart'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    banner,
    products,
    slidecard,
    favorite,
    cart
  }
})
