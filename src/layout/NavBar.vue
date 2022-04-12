<template>
<div class="navbar py-0">
  <!-- nav1 -->
  <div class="w-100 bg-dark user-select-none">
    <div class="container">
      <div class="row">
        <nav class="nav py-0" style="font-family: 'Jost';font-weight: 600;">
          <router-link :to="{ name: 'Shop', params: { group: 'all', type: type || 'all' }}" class="nav1 nav-link text-secondary mx-1 py-1">
            ALL
          </router-link>
          <router-link :to="{ name: 'Shop', params: { group: 'women', type: type || 'all' }}" class="nav1 nav-link text-secondary mx-1 py-1">
            WOMEN
          </router-link>
          <router-link :to="{ name: 'Shop', params: { group: 'men', type: type || 'all' }}" class="nav1 nav-link text-secondary mx-1 py-1">
            MEN
          </router-link>
        </nav>
      </div>
    </div>
  </div>
  <!-- nav2 -->
  <div class="w-100 bg-primary user-select-none">
    <div class="container">
      <div class="row">
        <nav class="d-flex flex-row position-relative w-100 justify-content-between">
          <h1 class="navbar-brand d-flex position-absolute top-50 start-50 my-auto"
            style="transform: translate(-50%,-50%);vertical-align: middle">
            <a href="/" class="align-center text-dark text-decoration-none"
              style="vertical-align: middle;font-family: 'Krona one';font-size: 21px; font-weight: 600">Kjølig</a>
          </h1>
          <ul class="nav py-3">
            <li class="nav-link px-2 mr-1">
              <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'all' }}" class="nav2 position-relative text-secondary">
                All
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link px-2 mx-1">
              <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'clothing' }}" class="nav2 position-relative text-secondary">
                Clothing
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link px-2 mx-1">
              <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'shoes' }}" class="nav2 position-relative text-secondary">
                Shoes
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link px-2 mx-1">
              <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'bag' }}" class="nav2 position-relative text-secondary">
                Bag
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
          </ul>
          <ul class="nav align-items-center">
            <li class="nav3 nav-link text-dark"><i class="fa-solid fa-magnifying-glass"></i></li>
            <li class="nav3 nav-link text-dark" data-bs-toggle="modal" data-bs-target="#fav"><i class="fa-solid fa-heart"></i></li>
            <li class="nav3 nav-link text-dark" data-bs-toggle="modal" data-bs-target="#cart"><i class="fas fa-bag-shopping"></i></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <!-- fav視窗 -->
  <div class="modal fade" id="fav" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Wishlist</h5>
        </div>
        <div class="modal-body">
          <ul class="me-3">
            <li v-for="item of favInfo" :key="item.id" class="d-flex align-items-center">
              <img :src="item.img" class="me-4">
              <h5 class="align-self-start mt-2" data-bs-dismiss="modal" @click="toShopInfo(item.id)">{{item.title}}</h5>
              <p class="m-0 ms-auto me-4">$ {{item.price}}</p>
              <i class="fa-solid fa-xmark" @click="removeFav(item.id)"></i>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <!-- cart視窗 -->
  <div class="modal fade" id="cart" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
        </div>
        <div class="modal-body">
          <ul class="me-3">
            <li v-for="item of cartInfo" :key="item.id" class="d-flex align-items-center">
              <img :src="item.img" class="me-4">
              <h5 class="align-self-start mt-2" data-bs-dismiss="modal" @click="toShopInfo(item.id)">{{item.title}}</h5>
              <p>數量： {{item.qty}}</p>
              <p class="m-0 ms-auto me-4">單價： {{item.price}}</p>
              <p class="m-0 ms-auto me-4">小計： {{item.price*item.qty}}</p>
              <i class="fa-solid fa-xmark" @click="removeCart(item.id)"></i>
            </li>
          </ul>
          總Total: {{totalPrice}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'NavBar',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    // route
    const group = computed(() => route.params.group)
    const type = computed(() => route.params.type)

    // router
    const toShopInfo = (id) => {
      router.push({
        name: 'Shop_info',
        path: `/shopinfo/${id}`,
        params: {
          id: id
        }
      })
    }

    // 追蹤清單
    store.commit('favorite/getData')
    const fav = computed(() => store.state.favorite.data)
    const favInfo = computed(() => store.getters['favorite/favInfo'])
    const removeFav = (id) => {
      store.commit('favorite/remove', id)
      store.commit('favorite/getData')
    }

    // 購物車
    store.commit('cart/getData')
    const cart = computed(() => store.state.cart.data)
    const cartInfo = computed(() => store.getters['cart/cartInfo'])
    const totalPrice = computed(() => cartInfo.value.reduce((p, c) => {
      p += c.price * c.qty
      return p
    }, 0))
    const removeCart = (id) => {
      store.commit('cart/remove', id)
      store.commit('cart/getData')
    }
    return {
      group,
      type,
      toShopInfo,
      fav,
      favInfo,
      removeFav,
      cart,
      cartInfo,
      totalPrice,
      removeCart
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav1 {
  font-size: 9px;
  transition: 0.3s;
  &:hover, &.router-link-active{
    color: white !important;
    cursor: pointer;
  }
}
.nav2 {
  font-size: 14px;
  font-family: 'Jost';
  font-weight: 400;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: black !important;
    cursor: pointer;
  }
  .point {
    content: '';
    height: 4px;
    width: 4px;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 3px);
  }
  &.router-link-active {
    color: black !important;
    .point {
      opacity: 1;
      transition: 0.2s;
    }
  }
}
.nav3 {
  transition: 0.3s;
  &:hover {
    opacity: 30%;
    cursor: pointer;
  }
}
.modal {
  .modal-title {
    // font-family: 'Jost';
  }
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
  }
  i {
    font-size: 22px;
    cursor: pointer;
  }
}
</style>
