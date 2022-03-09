<template>
  <div class="home">
    <Carousel/>
    <SwiperCard :data="handPickedDaily" title="Hand-pickedDaily"/>
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
      handPickedDaily: computed(() => store.state.slidecard.handPickedDaily),
      trendingNow: computed(() => store.state.slidecard.trendingNow)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
