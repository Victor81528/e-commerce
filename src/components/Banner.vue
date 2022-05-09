<template>
  <div class="banner d-none d-md-flex justify-content-center user-select-none">
    <div class="placeholder twinkle"></div>
    <div class="swiper" ref="swiperEle">
      <div class="swiper-button start-0" ref="prevButton">
        <div class="swiper-button-prev text-light"></div>
      </div>
      <div class="swiper-button end-0" ref="nextButton">
        <div class="swiper-button-next text-light"></div>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) of banner" :key="index">
          <img class="w-100" :src="item.img">
          <h5 class="text-white" v-html="item.title"></h5>
          <p v-html="item.desc"></p>
          <router-link :to="{ path: item.link }" v-html="item.linkTitle"/>
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
.twinkle {
  color: rgba($color: #000000, $alpha: 0)!important;
  border-radius: 10px;
  background-color: rgba($color: #929292, $alpha: 1.0);
  cursor: unset!important;
  animation: img-loading 1.7s infinite;
  @keyframes img-loading {
    50% { background-color: rgba($color: #929292, $alpha: 0.7); }
  }
}
.banner {
  position: relative;
  width: 100vw;
  aspect-ratio: 1920/890;
  .placeholder {
    position: absolute;
    width: 94%;
    height: 92%;
    margin-top: 25px;
    z-index: -1;
  }
}
.swiper {
  .swiper-button {
    position: absolute;
    width: 15%;
    height: 100%;
    top: 0;
    z-index: 11;
    transition: 0.2s;
    background-color: rgba(255,255,255, 0);
    &:hover {
      background-color: rgba(255,255,255, 0.3);
      cursor: pointer;
    }
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
      font-size: 150px;
      white-space: nowrap;
      @media screen and (max-width: 1400px) {
        font-size: 110px;
      }
      @media screen and (max-width: 1200px) {
        font-size: 80px;
      }
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
      transition: 0.1s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  button {
    z-index: 900;
  }
}
</style>
