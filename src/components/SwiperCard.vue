<template>
  <div class="swiper-card user-select-none">
    <div class="container my-5">
      <div class="swiper">
        <div class="d-flex justify-content-between mt-3">
          <h3 class="d-block ps-3 mb-4">{{title}}</h3>
          <div class="d-flex navigation align-self-end mb-1 me-2">
            <div class="button-prev d-flex justify-content-center align-items-center rounded-circle bg-dark"><i class="fa-solid fa-angle-left text-white"></i></div>
            <div class="button-next d-flex justify-content-center align-items-center rounded-circle bg-dark"><i class="fa-solid fa-angle-right text-white"></i></div>
          </div>
        </div>
        <hr>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) of data" :key="index">
            <img class="" :src="item.img" alt="">
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
    const slideItem = ref(null)

    const next = () => {
      console.log(slideItem.value.style)
    }

    let swiper = null
    onMounted(() => {
      swiper = new Swiper('.swiper', {
        modules: [Navigation],
        navigation: {
          // nextEl: '.swiper-button-next',
          prevEl: '.button-prev',
          nextEl: '.button-next'
        },
        breakpoints: {
          // when window width is >= 640px
          992: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        },
        speed: 500,
        spaceBetween: 20
      })
    })

    return {
      next,
      swiper
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
    img {
      width: 100%;
      height: 360px;
      border-radius: 16px;
      object-fit: cover;
      // object-position: 0 0;
    }
    h5 {
      font-size: 18px;
      font-family: 'Krona one';
    }
    p {
      font-family: 'Jost';
    }
  }
  .button-prev, .button-next {
    width: 32px;
    height: 32px;
    margin-right: 6px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 30%;
    }
    i {
      font-size: 7px;
    }
  }
}
</style>
