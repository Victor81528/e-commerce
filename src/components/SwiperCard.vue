<template>
  <div class="swiper-card" :class="{ 'no-event': onLoading }" @click="toShopInfo(item.id)">
    <div :class="{ 'twinkle': onLoading }">
      <img :src="item.img" @load="onImg()">
    </div>
    <div :class="{ 'twinkle': onLoading }">
      <h5 class="mt-2 mb-1">{{item.title}}</h5>
      <p class="text-secondary">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'SwiperCard',
  props: ['item'],
  setup () {
    const router = useRouter()

    const onLoading = ref(true)
    const onImg = () => {
      onLoading.value = false
    }

    const toShopInfo = (id) => {
      router.push({
        name: 'Shop_info',
        params: {
          id: id
        }
      })
    }

    return {
      onLoading,
      onImg,
      toShopInfo
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/all.scss';
.twinkle {
  color: rgba($color: $black, $alpha: 0)!important;
  border-radius: 16px;
  background-color: rgba($color: $placeholder, $alpha: 1.0);
  margin-left: 0!important;
  margin-right: 0!important;
  cursor: default!important;
  animation: img-loading 1.7s infinite;
  @keyframes img-loading {
    50% { background-color: rgba($color: $placeholder, $alpha: 0.5); }
  }
  & > * {
    visibility: hidden;
  }
}
.no-event {
  pointer-events: none;
}

.swiper-card {
  cursor: pointer;
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
