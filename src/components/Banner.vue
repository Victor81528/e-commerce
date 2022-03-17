<template>
  <div class="banner user-select-none">
    <div class="swiper" ref="swiperEle">
      <div class="swiper-button start-0" ref="prevButton">
        <div class="swiper-button-prev text-light"></div>
      </div>
      <div class="swiper-button end-0" ref="nextButton">
        <div class="swiper-button-next text-light"></div>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) of banner" :key="index">
          <img class="w-100" :src="item.img" alt="">
          <h5 class="text-white" v-html="item.title"></h5>
          <p v-html="item.desc"></p>
          <a href="/" v-html="item.linkTitle"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Swiper, { Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'Banner',
  props: ['banner'],
  setup () {
    let swiper = null
    const swiperEle = ref(null)
    const prevButton = ref(null)
    const nextButton = ref(null)

    onMounted(() => {
      swiper = new Swiper(swiperEle.value, {
        modules: [Navigation, Autoplay],
        navigation: {
          prevEl: prevButton.value,
          nextEl: nextButton.value
        },
        speed: 700,
        loop: true,
        allowTouchMove: false,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      })
    })

    return {
      swiper,
      swiperEle,
      prevButton,
      nextButton
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  .swiper-button {
    position: absolute;
    width: 15%;
    height: 100%;
    top: 0;
    cursor: pointer;
    z-index: 11;
    .swiper-button-prev {
      left: 50px;
    }
    .swiper-button-next {
      right: 50px
    }
  }
  .swiper-wrapper {
    img {
      -webkit-user-drag: none;
    }
    h5 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 100px;
    }
    p {
      position: absolute;
      bottom: 8%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    a {
      position: absolute;
      text-decoration: none;
      bottom: 3%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  button {
    z-index: 900;
  }
}
</style>
