<template>
  <div class="shop_info user-select-none">
    <div class="d-flex">
      {{productInfo}}
      <img :src="productInfo.img" alt="">
      <div>
        <h1>{{productInfo.title}}</h1>
        {{productInfo.price}}
        <div class="counter d-flex">
          <div @click="reduce()" class="counter-button border text-center"><i class="fa-solid fa-minus align-middle"></i></div>
          <div class="counter-show text-center"><p class="d-inline align-middle m-0">{{count}}</p></div>
          <div @click="increase()" class="counter-button border text-center"><i class="fa fa-plus align-middle"></i></div>
        </div>
        {{checkFav}}
        <button @click="addFav()">愛心加加</button>
        <button @click="removeFav()">愛心刪刪</button>
        <button @click="addCart(id, count)">購物車加加</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  name: 'Shop_info',
  setup () {
    const store = useStore()
    const route = useRoute()

    // 取得route.params並轉成number
    const id = parseInt(route.params.id)
    const productInfo = computed(() => store.getters['products/getProInfo'](id))

    // counter
    const count = ref(1)
    const reduce = () => {
      count.value--
    }
    const increase = () => {
      count.value++
    }
    watch(count, () => {
      if (count.value <= 1) count.value = 1
      if (count.value >= 9) count.value = 9
    })

    const checkFav = computed(() => {
      const data = store.state.favorite.data
      return data.some(i => i.id === id)
    })
    const addFav = () => {
      // 將該產品id加入localStorage
      store.commit('favorite/add', id)
      // 重新取得localStorage的資料
      store.commit('favorite/getData')
    }
    const removeFav = () => {
      store.commit('favorite/remove', id)
      store.commit('favorite/getData')
    }

    const addCart = (id, count) => {
      store.commit('cart/add', { id, count })
      store.commit('cart/getData')
    }
    return {
      productInfo,
      count,
      reduce,
      increase,
      checkFav,
      addFav,
      removeFav,
      addCart
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
.counter-button {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.counter-show {
  width: 50px;
  height: 30px;
}
</style>
