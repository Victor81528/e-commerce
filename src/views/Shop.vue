<template>
  <div class="shop user-select-none">
    <div class="container">
      <div class="row mt-4">
        <div v-if="products.length === 0">
          目前沒有商品喔~
        </div>
        group: {{group}}
        type: {{type}}
        <!-- <div v-for="(i, index) of products" :key="index">
          {{i.fav}}
        </div> -->
        <div class="col-6 col-md-4 col-lg-3 col-xl-2 position-relative mb-5" v-for="item of products" :key="item.id">
          <img :src="item.img" @click="toShopinfo(item.id)">
          <h4 class="mt-2 mb-3 ms-1">{{item.id}}</h4>
          <div class="d-flex justify-content-between align-items-center ms-1 me-1">
            <p class="mb-0">$ {{item.price}}</p>
            <i v-if="!item.fav" class="fa-regular fa-heart text-secondary" @click="addFav(item.id)"></i>
            <i v-else class="fa-solid fa-heart" @click="removeFav(item.id)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'Shop',
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const group = computed(() => route.params.group)
    const type = computed(() => route.params.type)
    const products = computed(() => store.getters[`products/${type.value}`])

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

    const toShopinfo = (id) => {
      router.push({
        name: 'Shop_info',
        path: `/shopinfo/${id}`,
        params: {
          id: id
        }
      })
    }
    return {
      group,
      type,
      products,
      addFav,
      removeFav,
      toShopinfo
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
    -webkit-user-drag: none;
  }
  h4 {
    font-family: 'Jost';
    font-weight: 400;
  }
  p {
    font-family: 'Jost';
    font-weight: 600;
  }
  i {
    cursor: pointer;
    &:hover {

    }
  }
</style>
