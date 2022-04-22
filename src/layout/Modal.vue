<template>
<div>
  <!-- fav視窗 -->
  <div class="modal fade" id="fav" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="favModalLabel">Wishlist</h5>
        </div>
        <div class="modal-body">
          <div v-if="favInfo.length === 0" class="text-center">
            追蹤清單為空
          </div>
          <ul v-else class="me-3">
            <li v-for="item of favInfo" :key="item.id" class="d-flex align-items-center">
              <img :src="item.img" class="me-4">
              <h5 class="align-self-start mt-2" data-bs-dismiss="modal" @click="toShopInfo(item.id)">{{item.title}}</h5>
              <p class="m-0 ms-auto me-4">$ {{item.price}}</p>
              <i class="fa-solid fa-xmark" @click="removeFav(item.id)"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- cart視窗 -->
  <div class="modal fade" id="cart" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalLabel">Shopping Cart</h5>
        </div>
        <div class="modal-body">
          <div v-if="cartInfo.length === 0" class="text-center">
            購物車為空
          </div>
          <ul v-else class="me-3">
            <li v-for="item of cartInfo" :key="item.id" class="d-flex align-items-center">
              <img :src="item.img" class="me-4">
              <h5 class="align-self-start mt-2" data-bs-dismiss="modal" @click="toShopInfo(item.id)">{{item.title}}</h5>
              <p>數量： {{item.qty}}</p>
              <p class="m-0 ms-auto me-4">單價： {{item.price}}</p>
              <p class="m-0 ms-auto me-4">小計： {{item.price*item.qty}}</p>
              <i class="fa-solid fa-xmark" @click="removeCart(item.id)"></i>
            </li>
          </ul>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          總金額: {{totalPrice}}
          <div class="checkOut py-2 px-3 text-center bg-black text-white" data-bs-dismiss="modal">結帳</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'Modal',
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
.modal {
  .modal-title {
    font-family: 'Jost';
  }
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
  }
  p {
    font-family: 'Jost';
  }
  i {
    font-size: 22px;
    cursor: pointer;
  }
}
.checkOut {
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 70%;
  }
}
</style>
