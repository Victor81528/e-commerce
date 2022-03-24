import { createStore } from 'vuex'
import banner from './banner'
import products from './products'
import slidecard from './slidecard'
import favorite from './favorite'

export default createStore({
  state: {
    a: 'qqq'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    banner,
    products,
    slidecard,
    favorite
  }
})
