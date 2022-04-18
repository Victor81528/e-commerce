<template>
  <div class="shop_info mb-5 user-select-none">
    <div class="container">
      <div class="row position-relative">
        <div class="img-container col-6">
          <img :src="productInfo.img" alt="">
        </div>
        <div class="col-6 d-flex flex-column">
          <div class="d-flex">
            <h1 class="text-dark m-0 user-select-all">{{productInfo.title}}</h1>
          </div>
          <hr class="my-4">
          <p class="text-dark">{{productInfo.desc}}</p>
          <hr class="my-4">
          <div class="d-flex justify-content-between align-items-center mb-5">
            <h5 class="m-0"><span class="me-3">售價</span>$ {{productInfo.price}}</h5>
            <i v-if="!checkFav" class="fav fa-regular fa-heart text-secondary" @click="addFav(productInfo.id)"></i>
            <i v-else class="fav fa-solid fa-heart text-danger align-middle" @click="removeFav(productInfo.id)"></i>
          </div>
          <div class="size-container d-flex mb-5">
            <h5 class="m-0 me-3">尺寸</h5>
            <div class="size border border-dark text-center me-2"><p class="m-0">S</p></div>
            <div class="size border border-dark text-center me-2">M</div>
            <div class="size border border-dark text-center me-2">L</div>
            <div class="size border border-dark text-center me-2">XL</div>
            <div class="size border border-dark text-center">XXL</div>
          </div>
          <div class="counter-container d-flex align-items-center mb-5">
            <h5 class="m-0 me-3">數量</h5>
            <div class="counter d-flex align-items-center border">
              <div @click="reduce()" class="counter-button d-flex justify-content-center align-items-center text-center"><i class="fa-solid fa-minus align-middle"></i></div>
              <div class="counter-show d-flex justify-content-center align-items-center text-center mx-2">
                <p class="my-auto">{{count}}</p>
              </div>
              <div @click="increase()" class="counter-button d-flex justify-content-center align-items-center text-center"><i class="fa fa-plus align-middle"></i></div>
            </div>
          </div>
          <div class="add mt-auto p-3 text-center bg-black text-white" @click="addCart(productInfo.id, count)">加入購物車</div>
          <div v-show="aler" class="aler position-absolute bg-dark p-5">成功加入購物車</div>
        </div>
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

    const aler = ref(false)
    const addCart = (id, count) => {
      store.commit('cart/add', { id, count })
      store.commit('cart/getData')
      aler.value = true
      setTimeout(() => {
        aler.value = false
      }, 1500)
    }
    return {
      productInfo,
      count,
      reduce,
      increase,
      checkFav,
      addFav,
      removeFav,
      aler,
      addCart
    }
  }
}
</script>

<style lang="scss" scoped>
.aler {
  color: white;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 90%;
}
.shop_info {
  margin-top: 98px;
  flex-grow: 1;
  .img-container {
    overflow: hidden;
    object-fit: cover;
    img {
      width: 100%;
    }
  }
  h1 {
    font-family: 'Krona One';
    font-weight: 400;
  }
  p {
    font-family: 'Jost';
  }
  h5 {
    font-family: 'Jost';
  }
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
.fav {
  cursor: pointer;
  transition: 0.3s;
  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 30%;
    }
  }
}
.size-container {
  .size {
    width: 10%;
    cursor: pointer;
  }
}
.add {
  cursor: pointer;
  transition: 0.3s;
  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 70%;
    }
  }
}
</style>
