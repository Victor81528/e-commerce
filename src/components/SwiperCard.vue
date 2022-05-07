<template>
  <div class="swiper-card user-select-none overflow-hidden">
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
          <div class="swiper-slide" v-for="(item, index) of data" :key="index" @click="toShopInfo(item.id)">
            <div class="blur">
              <img :src="item.img">
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
import { useRouter } from 'vue-router'
import Swiper, { Navigation, FreeMode } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'SwiperCard',
  props: ['data', 'title'],
  setup () {
    const router = useRouter()

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
        breakpoints: {
          576: {
            slidesPerView: 3
          },
          768: {
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 4
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 18
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

    const toShopInfo = (id) => {
      router.push({
        name: 'Shop_info',
        params: {
          id: id
        }
      })
    }

    return {
      swiper,
      swiperEle,
      prevButton,
      nextButton,
      prevDisallowed,
      nextDisallowed,
      toShopInfo
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
  overflow: visible;
  .swiper-slide {
    width: 60%;
    cursor: pointer;
    .blur {
      overflow: hidden;
      border-radius: 16px;
      img {
        width: 100%;
        height: 360px;
        object-fit: cover;
        -webkit-user-drag: none;
        transition: 0.25s;
        &:hover {
          filter: brightness(80%) grayscale(80%);
        }
        @media screen and (max-width: 768px) {
          height: 300px;
          &:hover {
            filter: none;
          }
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
    opacity: 0.3;
  }
}
</style>
