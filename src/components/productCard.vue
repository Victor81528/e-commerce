<template>
<div class="border-0">
  <div class="blur">
    <img :src="item.img" @click="toShopinfo(item.id)">
  </div>
  <h4 class="mt-2 mb-3 ms-1" @click="toShopinfo(item.id)">{{item.title}}</h4>
  <div class="d-flex justify-content-between align-items-center ms-1 me-1">
    <p class="mb-0">$ {{item.price}}</p>
    <i v-if="!checkFav" class="fa-regular fa-heart text-secondary" @click="addFav(item.id)"></i>
    <i v-else class="fa-solid fa-heart text-danger" @click="removeFav(item.id)"></i>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'ProductCard',
  props: [
    'item'
  ],
  setup () {
    const store = useStore()
    const router = useRouter()

    const checkFav = computed(() => {
      const data = store.state.favorite.data
      return data.some(i => i.id === props.item.id)
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
    const toShopinfo = (id) => {
      router.push({
        name: 'Shop_info',
        params: {
          id: id
        }
      })
    }
    return {
      checkFav,
      addFav,
      removeFav,
      toShopinfo
    }
  }
}
</script>

<style lang="scss" scoped>
.blur {
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
    -webkit-user-drag: none;
    cursor: pointer;
    transition: 0.3s;
    @media screen and (min-width: 768px) {
      &:hover {
        filter: brightness(80%) grayscale(80%);
      }
    }
  }
}
h4 {
  font-family: 'Jost';
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s;
  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 60%;
    }
  }
}
p {
  font-family: 'Jost';
  font-weight: 600;
}
i {
  cursor: pointer;
  transition: 0.3s;
  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 30%;
    }
  }
}
</style>
