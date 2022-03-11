<template>
  <div class="home">
    <Carousel :banner="banner"/>
    <SwiperCard :data="handPickedDaily" title="Hand-picked Daily"/>
    <SwiperCard :data="trendingNow" title="Trending now"/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Carousel from '@/components/Carousel.vue'
import SwiperCard from '@/components/SwiperCard.vue'
export default {
  name: 'Home',
  components: {
    Carousel,
    SwiperCard
  },
  setup () {
    const store = useStore()
    return {
      banner: computed(() => store.state.banner.data),
      handPickedDaily: computed(() => store.state.slidecard.handPickedDaily),
      trendingNow: computed(() => store.state.slidecard.trendingNow)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
