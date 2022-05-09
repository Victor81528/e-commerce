<template>
  <div class="swiper-card" @click="toShopInfo(item.id)">
    <img v-lazy="{ src: item.img, lifecycle: lazyOptions.lifecycle }" :class="{ 'twinkle': onTwinkle }">
    <div :class="{ 'twinkle': onTwinkle }">
      <h5 class="mt-2 mb-1">{{item.title}}</h5>
      <p class="text-secondary">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'SwiperCard',
  props: ['item'],
  setup () {
    const router = useRouter()

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

    const toShopInfo = (id) => {
      router.push({
        name: 'Shop_info',
        params: {
          id: id
        }
      })
    }

    return {
      onTwinkle,
      lazyOptions,
      toShopInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.twinkle {
  color: rgba($color: #000000, $alpha: 0)!important;
  border-radius: 16px;
  background-color: rgba($color: #929292, $alpha: 1.0);
  margin-left: 0!important;
  margin-right: 0!important;
  cursor: unset!important;
  animation: img-loading 1.7s infinite;
  @keyframes img-loading {
    50% { background-color: rgba($color: #929292, $alpha: 0.5); }
  }
  & > * {
    visibility: hidden;
  }
}
img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 16px;
  -webkit-user-drag: none;
  transition: 0.25s;
  &:hover {
    filter: brightness(80%) grayscale(80%);
  }
  @media screen and (max-width: 992px) {
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    &:hover {
      filter: none;
    }
  }
}
h5 {
  font-size: 18px;
  font-family: 'Krona one';
}
p {
  font-family: 'Jost';
}
</style>
