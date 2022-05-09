<template>
  <div class="user-select-none overflow-hidden">
    <div class="container-md my-3 my-md-5 mx-0 mx-md-auto">
      <div class="swiper" ref="swiperEle">
        <div class="d-flex justify-content-between mt-3">
          <h3 class="d-block ps-md-3 mb-4">{{title}}</h3>
          <div class="d-none d-md-flex navigation align-self-end mb-1 me-2">
            <div class="nav-button d-flex justify-content-center align-items-center rounded-circle bg-dark" :class="{'disallow': prevDisallowed}" ref="prevButton">
              <i class="fa-solid fa-angle-left text-white"></i>
            </div>
            <div class="nav-button d-flex justify-content-center align-items-center rounded-circle bg-dark" :class="{'disallow': nextDisallowed}" ref="nextButton">
              <i class="fa-solid fa-angle-right text-white"></i>
            </div>
          </div>
        </div>
        <hr>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) of data" :key="index">
            <Swiper-card :item="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Swiper, { Navigation, FreeMode } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import SwiperCard from './SwiperCard.vue'

export default {
  name: 'SwiperRow',
  components: {
    SwiperCard
  },
  props: ['data', 'title'],
  setup () {
    let swiper = null
    const swiperEle = ref(null)
    const prevButton = ref(null)
    const nextButton = ref(null)
    const prevDisallowed = ref(true)
    const nextDisallowed = ref(false)

    onMounted(() => {
      swiper = new Swiper(swiperEle.value, {
        modules: [Navigation, FreeMode],
        navigation: {
          prevEl: prevButton.value,
          nextEl: nextButton.value
        },
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 500,
        allowTouchMove: true,
        freeMode: true,
        breakpoints: {
          576: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            allowTouchMove: false,
            freeMode: true
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
            allowTouchMove: false,
            freeMode: true
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 18,
            allowTouchMove: false,
            freeMode: true
          }
        },
        on: {
          reachBeginning: () => {
            prevDisallowed.value = true
          },
          fromEdge: () => {
            prevDisallowed.value = false
            nextDisallowed.value = false
          },
          reachEnd: () => {
            nextDisallowed.value = true
          }
        }
      })
    })
    return {
      swiper,
      swiperEle,
      prevButton,
      nextButton,
      prevDisallowed,
      nextDisallowed
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  overflow: visible;
  h3 {
    font-size: 36px;
    font-family: 'Krona one';
  }
  hr {
    margin: 0 0 30px 0;
  }
  .swiper-slide {
    width: 60%;
    cursor: pointer;
  }
  .nav-button {
    width: 32px;
    height: 32px;
    margin-right: 6px;
    cursor: pointer;
    transition: 0.2s;
    i {
      font-size: 7px;
    }
  }
  .disallow {
    opacity: 0.3;
  }
}
</style>
