<template>
  <div class="home">
    <Banner :banner="banner"/>
    <SwiperCard :data="handPickedDaily" title="Hand-picked Daily"/>
    <SwiperCard :data="trendingNow" title="Trending now"/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Banner from '@/components/Banner.vue'
import SwiperCard from '@/components/SwiperCard.vue'
export default {
  name: 'Home',
  components: {
    Banner,
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
