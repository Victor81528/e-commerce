<template>
  <div class="banner d-none d-md-flex justify-content-center user-select-none">
    <div class="swiper" ref="swiperEle" :class="{ 'twinkle': onLoading }">
      <div class="swiper-button start-0" ref="prevButton">
        <div class="swiper-button-prev text-light"></div>
      </div>
      <div class="swiper-button end-0" ref="nextButton">
        <div class="swiper-button-next text-light"></div>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) of banner" :key="index">
          <img :src="item.img" class="w-100" @load="onImg()">
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

    const onLoading = ref(true)
    const onImg = () => {
      onLoading.value = false
    }

    return {
      swiper,
      swiperEle,
      prevButton,
      nextButton,
      onLoading,
      onImg
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/all.scss';
.twinkle {
  position: absolute;
  width: 94%;
  height: 92%;
  border-radius: 10px;
  margin-top: 25px;
  z-index: -1;
  background-color: rgba($color: $placeholder, $alpha: 1.0);
  cursor: unset!important;
  animation: img-loading 1.7s infinite;
  @keyframes img-loading {
    50% { background-color: rgba($color: $placeholder, $alpha: 0.5); }
  }
  & > * {
    visibility: hidden!important;
  }
}
.banner {
  position: relative;
  width: 100vw;
  aspect-ratio: 1920/890;
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
        opacity: 0.6;
      }
    }
  }
  button {
    z-index: 900;
  }
}
</style>
