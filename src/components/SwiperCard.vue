<template>
  <div class="swiper-card user-select-none">
    <div class="container my-5">
      <div class="swiper" ref="swiperEle">
        <div class="d-flex justify-content-between mt-3">
          <h3 class="d-block ps-3 mb-4">{{title}}</h3>
          <div class="d-flex navigation align-self-end mb-1 me-2">
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
            <div class="blur">
              <img class="" :src="item.img" alt="">
            </div>
            <h5 class="mt-2 mb-1">{{item.title}}</h5>
            <p class="text-secondary">{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'SwiperCard',
  props: ['data', 'title'],
  setup () {
    const swiperEle = ref(null)
    const prevButton = ref(null)
    const nextButton = ref(null)
    const prevDisallowed = ref(true)
    const nextDisallowed = ref(false)

    let swiper = null
    onMounted(() => {
      swiper = new Swiper(swiperEle.value, {
        modules: [Navigation],
        navigation: {
          prevEl: prevButton.value,
          nextEl: nextButton.value
        },
        breakpoints: {
          // when window width is >= 640px
          992: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1400: {
            allowTouchMove: false,
            slidesPerView: 5,
            spaceBetween: 20
          }
        },
        speed: 500,
        spaceBetween: 20,
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
h3 {
  font-size: 36px;
  font-family: 'Krona one';
}
hr {
  margin: 0 0 30px 0;
}
.swiper {
  width: 100%;
  height: 100%;
  .swiper-slide {
    cursor: pointer;
    .blur {
      overflow: hidden;
      border-radius: 16px;
      img {
        width: 100%;
        height: 360px;
        object-fit: cover;
        // object-position: 0 0;
        -webkit-user-drag: none;
        transition: 0.2s;
        &:hover {
          filter: blur(3px);
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
    opacity: 30%;
  }
}
</style>
