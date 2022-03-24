<template>
<div class="navbar py-0 user-select-none">
  <!-- nav1 -->
  <div class="w-100 bg-dark">
    <div class="container">
      <div class="row">
        <nav class="nav py-0" style="font-family: 'Jost';font-weight: 600;">
          <a class="nav1 nav-link text-secondary mx-1 py-1" data-toggle="tab">WOMEN</a>
          <a class="nav1 nav-link text-secondary mx-1 py-1" data-toggle="tab">MEN</a>
          <a class="nav1 nav-link text-secondary mx-1 py-1" data-toggle="tab">KIDS</a>
        </nav>
      </div>
    </div>
  </div>
  <!-- nav2 -->
  <div class="w-100 bg-primary">
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
              <router-link to="/shop/all" class="nav2 position-relative text-secondary">
                All
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link px-2 mx-1">
              <router-link to="/shop/clothing" class="nav2 position-relative text-secondary">
                Clothing
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link px-2 mx-1">
              <router-link to="/shop/shoes" class="nav2 position-relative text-secondary">
                Shoes
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link px-2 mx-1">
              <router-link to="/shop/bag" class="nav2 position-relative text-secondary">
                Bag
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
          </ul>
          <ul class="nav align-items-center">
            <li class="nav3 nav-link text-dark"><i class="fa-solid fa-magnifying-glass"></i></li>
            <li class="nav3 nav-link text-dark" data-bs-toggle="modal" data-bs-target="#fav"><i class="fa-solid fa-heart"></i></li>
            <li class="nav3 nav-link text-dark"><i class="fas fa-bag-shopping"></i></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <!-- Modal視窗 -->
  <div class="modal fade" id="fav" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">追蹤清單</h5>
        </div>
        <div class="modal-body">
          <ul v-for="item of favInfo" :key="item.id">
            <li>
              {{item.title}}
              ${{item.price}}
            </li>
          </ul>
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
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'NavBar',
  setup () {
    const router = useRouter()
    const store = useStore()

    const toShop = (type) => {
      router.push({
        name: 'Shop',
        path: `/shop/${type}`,
        params: {
          type: type
        }
      })
    }

    store.commit('favorite/getData')
    const fav = computed(() => store.state.favorite.data)
    const favInfo = computed(() => store.getters['favorite/favInfo'])
    return {
      toShop,
      fav,
      favInfo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav1 {
  font-size: 9px;
  transition: 0.3s;
  &:hover {
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
</style>
