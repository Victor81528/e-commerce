<template>
  <div class="shop_info user-select-none">
    <div class="container py-3 py-sm-4 py-md-5 mb-5">
      <div class="row position-relative">
        <div class="img-container col-12 col-sm-6">
          <img :class="{ 'twinkle': onTwinkle }" v-lazy="{ src: productInfo.img, lifecycle: lazyOptions.lifecycle }">
        </div>
        <div class="col-12 col-sm-6 d-flex flex-column mt-4 mt-sm-0">
          <div class="d-flex mb-4" :class="{ 'twinkle': onTwinkle }">
            <h1 class="text-dark m-0 user-select-all">{{productInfo.title}}</h1>
          </div>
          <hr class="d-none d-sm-block my-4">
          <p class="my-4 text-dark" :class="{ 'twinkle': onTwinkle }">{{productInfo.desc}}</p>
          <hr class="d-none d-sm-block my-4">
          <div :class="{ 'twinkle': onTwinkle }">
            <div class="d-flex justify-content-between align-items-center mt-4 mb-5">
              <h5 class="m-0"><span class="d-none d-sm-inline me-3">售價</span>$ {{productInfo.price}}</h5>
              <i v-if="!checkFav" class="fav fa-regular fa-heart text-secondary pe-1 pe-sm-0" @click="addFav(productInfo.id)"></i>
              <i v-else class="fav fa-solid fa-heart text-danger align-middle" @click="removeFav(productInfo.id)"></i>
            </div>
            <div class="counter-container d-flex align-items-center mb-5">
              <h5 class="d-none d-sm-inline m-0 me-3">數量</h5>
              <div class="counter d-flex align-items-center border">
                <div @click="reduce()" class="counter-button d-flex justify-content-center align-items-center text-center"><i class="fa-solid fa-minus align-middle"></i></div>
                <div class="counter-show d-flex justify-content-center align-items-center text-center mx-2">
                  <p class="my-auto">{{count}}</p>
                </div>
                <div @click="increase()" class="counter-button d-flex justify-content-center align-items-center text-center"><i class="fa fa-plus align-middle"></i></div>
              </div>
            </div>
            <div class="size-container d-flex mb-5">
              <h5 class="d-none d-lg-inline m-0 me-3 my-auto">尺寸</h5>
              <div :class="{ 'size-check': chosenSize === 's' }" @click="sizeCheck('s')"
                class="size border border-dark text-center me-2 me-sm-1 me-md-2 py-3 p-sm-2">S</div>
              <div :class="{ 'size-check': chosenSize === 'm' }" @click="sizeCheck('m')"
                class="size border border-dark text-center me-2 me-sm-1 me-md-2 py-3 p-sm-2">M</div>
              <div :class="{ 'size-check': chosenSize === 'l' }" @click="sizeCheck('l')"
                class="size border border-dark text-center me-2 me-sm-1 me-md-2 py-3 p-sm-2">L</div>
              <div :class="{ 'size-check': chosenSize === 'xl' }" @click="sizeCheck('xl')"
                class="size border border-dark text-center me-2 me-sm-1 me-md-2 py-3 p-sm-2">XL</div>
              <div :class="{ 'size-check': chosenSize === 'xxl' }" @click="sizeCheck('xxl')"
                class="size border border-dark text-center py-3 p-sm-2">XXL</div>
            </div>
            <div class="add mt-auto p-3 text-center bg-black text-white"
              @click="addCart(productInfo.id, count)">加入購物車</div>
            <div v-show="alert" class="alert position-fixed bg-dark p-5">成功加入購物車</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  name: 'Shop_info',
  setup () {
    const store = useStore()
    const route = useRoute()

    // 取得route.params並轉成number
    const id = computed(() => route.params.id)
    const productInfo = computed(() => store.getters['products/getProInfo'](parseInt(id.value)))

    const onTwinkle = ref(true)
    const lazyOptions = reactive({
      lifecycle: {
        loading: (el) => {
        },
        error: (el) => {
        },
        loaded: (el) => {
          onTwinkle.value = false
        }
      }
    })

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

    // size
    const chosenSize = ref('')
    const sizeCheck = (e) => {
      chosenSize.value = chosenSize.value === e ? '' : e
    }

    const checkFav = computed(() => {
      const data = store.state.favorite.data
      return data.some(i => i.id === parseInt(id.value))
    })

    const addFav = (id) => {
      // 將該產品id加入localStorage
      store.commit('favorite/add', id)
      // 重新取得localStorage的資料
      store.commit('favorite/getData')
    }
    const removeFav = (id) => {
      store.commit('favorite/remove', id)
      store.commit('favorite/getData')
    }

    const alert = ref(false)
    const addCart = (id, qty) => {
      store.commit('cart/add', { id, qty })
      store.commit('cart/getData')
      chosenSize.value = ''
      count.value = 1
      alert.value = true
      setTimeout(() => {
        alert.value = false
      }, 1500)
    }
    return {
      id,
      productInfo,
      onTwinkle,
      lazyOptions,
      count,
      chosenSize,
      sizeCheck,
      reduce,
      increase,
      checkFav,
      addFav,
      removeFav,
      alert,
      addCart
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/all.scss';
.twinkle {
  color: rgba($color: $black, $alpha: 0)!important;
  border-radius: 5px;
  background-color: rgba($color: $placeholder, $alpha: 1.0);
  cursor: unset!important;
  animation: img-loading 1.7s infinite;
  @keyframes img-loading {
    50% { background-color: rgba($color: $placeholder, $alpha: 0.5); }
  }
  & > * {
    visibility: hidden;
  }
}
.shop_info {
  margin-top: 98px;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    margin-top: 72px;
  }
  .img-container {
    overflow: hidden;
    object-fit: cover;
    img {
      width: 100%;
      border-radius: 3px;
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
.size-container {
  .size {
    width: 16%;
    max-width: 55px;
    border-radius: 2px;
    font-family: 'Jost';
    cursor: pointer;
    transition: 0.3s;
    @media screen and (min-width: 768px) {
      &:hover {
        background-color: $primary;
      }
    }
    @media screen and (max-width: 992px) {
      width: 20%;
      max-width: unset;
    }
  }
  .size-check {
    background-color: $primary;
  }
}
.counter {
  border-radius: 2px;
  .counter-button {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .counter-show {
    width: 50px;
    height: 30px;
    @media screen and (max-width: 576px) {
      width: 75px;
    }
  }
}
.fav {
  cursor: pointer;
  transition: 0.3s;
  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 0.3;
    }
  }
}
.add {
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;
  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 0.7;
    }
  }
}
.alert {
  color: white;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  word-break: keep-all;
  @media screen and (min-width: 576px) {
    padding: {
      left: 100px!important;
      right: 100px!important;
    }
  }
}
</style>
