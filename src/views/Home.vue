<template>
  <div class="home">
    <Banner :banner="banner"/>
    <SwiperCard :data="handPickedDaily" title="Hand-picked Daily"/>
    <SwiperCard :data="trendingNow" title="Trending Now"/>
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
    const banner = computed(() => store.state.banner.data)
    const handPickedDaily = computed(() => store.state.slidecard.handPickedDaily)
    const trendingNow = computed(() => store.state.slidecard.trendingNow)
    return {
      banner,
      handPickedDaily,
      trendingNow
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  flex-grow: 1;
  margin-top: 98px;
}
</style>
