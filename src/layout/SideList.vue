<template>
<div class="user-select-none">
  <!-- fav視窗 -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="fav">
    <div class="offcanvas-header justify-content-center">
      <h5 class="offcanvas-title" id="offcanvasFavLabel">Wishlist</h5>
    </div>
    <div class="offcanvas-body flex-grow-0">
      <div v-if="favInfo.length === 0" class="pt-5 text-center">
        追蹤清單為空
      </div>
      <ul v-else class="p-0 m-0">
        <li v-for="item of favInfo" :key="item.id" class="d-flex py-2">
          <img :src="item.img" class="me-4" data-bs-dismiss="offcanvas" @click="toShopInfo(item.id)">
          <div class="d-flex flex-column flex-sm-row justify-content-between flex-grow-1">
            <h5 class="align-self-start pe-3 pe-sm-5">{{item.title}}</h5>
            <div class="d-flex flex-column align-items-end">
              <p class="price align-self-start m-0 mt-sm-1 mb-4 mb-sm-0 ms-sm-auto">NT${{item.price}}</p>
              <p class="remove mt-3 mb-0" @click="removeFav(item.id)">移除</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- cart視窗 -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="cart">
    <div class="offcanvas-header justify-content-center">
      <h5 class="offcanvas-title" id="offcanvasCartLabel">Shopping Cart</h5>
    </div>
    <div class="offcanvas-body flex-grow-0">
      <div v-if="cartInfo.length === 0" class="py-5 text-center">
        購物車為空
      </div>
      <ul v-else class="p-0 m-0">
        <li v-for="item of cartInfo" :key="item.id" class="d-flex py-2">
          <img :src="item.img" class="me-4" data-bs-dismiss="offcanvas" @click="toShopInfo(item.id)">
          <div class="d-flex flex-column flex-grow-1">
            <h5 class="align-self-start pe-3 pe-sm-5">{{item.title}}</h5>
            <div class="d-flex flex-column flex-sm-row mt-2 mt-sm-3">
              <p class="m-0">{{item.qty}} 件</p>
              <p class="m-0 ms-sm-auto me-sm-5">NT ${{item.price*item.qty}}</p>
            </div>
            <div class="d-flex justify-content-end mt-auto">
              <p class="remove text-secondary mb-0 pe-auto" @click="removeCart(item.id)">移除</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="modal-footer d-flex justify-content-between">
      Total ${{totalPrice}}
      <div class="checkOut py-2 px-3 text-center bg-black text-white">結帳</div>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'SideList',
  setup () {
    const router = useRouter()
    const store = useStore()

    // router
    const toShopInfo = (id) => {
      router.push({
        name: 'Shop_info',
        params: {
          id: id
        }
      })
    }

    // 追蹤清單
    store.commit('favorite/getData')
    const favInfo = computed(() => store.getters['favorite/favInfo'])
    const removeFav = (id) => {
      store.commit('favorite/remove', id)
      store.commit('favorite/getData')
    }

    // 購物車
    store.commit('cart/getData')
    const cart = computed(() => store.state.cart.data)
    const cartInfo = computed(() => store.getters['cart/cartInfo'])
    const removeCart = (id) => {
      store.commit('cart/remove', id)
      store.commit('cart/getData')
    }
    const totalPrice = computed(() => cartInfo.value.reduce((p, c) => {
      p += c.price * c.qty
      return p
    }, 0))
    return {
      toShopInfo,
      favInfo,
      removeFav,
      cart,
      cartInfo,
      removeCart,
      totalPrice
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.offcanvas {
  width: 450px;
  @media screen and (max-width: 576px) {
    width: 85vw;
  }
  .offcanvas-title {
    font-family: 'Jost';
  }
  li {
    overflow: hidden;
    transition: 3s;
    img {
      width: 120px;
      min-width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 3px;
      cursor: pointer;
      transition: 0.3s;
      @media screen and (min-width: 768px) {
        &:hover {
          filter: brightness(80%) grayscale(80%);
        }
      }
    }
    h5 {
      font-size: 18px;
    }
    p {
      font-family: 'Jost';
    }
    .price {
      font-size: 15px;
      word-break: keep-all;
    }
    .remove {
      font-size: 14px;
      cursor: pointer;
      transition: 0.3s;
      word-break: keep-all;
      @media screen and (min-width: 768px) {
        &:hover {
          opacity: 0.3;
        }
      }
    }
  }
}
.checkOut {
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
}
</style>
