<template>
  <div>
    <img :src="item.img" @click="toShopinfo(item.id)">
    <h4 class="mt-2 mb-3 ms-1">{{item.id}}</h4>
    <div class="d-flex justify-content-between align-items-center ms-1 me-1">
      <p class="mb-0">$ {{item.price}}</p>
      <i v-if="!item.fav" class="fa-regular fa-heart text-secondary" @click="addFav(item.id)"></i>
      <i v-else class="fa-solid fa-heart" @click="removeFav(item.id)"></i>
    </div>
  </div>

</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'productCard',
  props: [
    'item'
  ],
  setup () {
    const store = useStore()
    const router = useRouter()

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
  }
</style>
