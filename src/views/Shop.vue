<template>
  <div class="shop user-select-none">
    <div class="container">
      <div class="row mt-4">
        <div v-if="filteredPro.length === 0">
          目前沒有商品喔~
        </div>
        {{filteredPro}}
        <div class="col-6 col-md-4 col-lg-3 col-xl-2 position-relative mb-5" v-for="item of filteredPro" :key="item.id">
          <ProductCard :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard'

export default {
  name: 'Shop',
  components: {
    ProductCard
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const group = computed(() => route.params.group)
    const type = computed(() => route.params.type)
    const filteredPro = computed(() => store.getters['products/filteredPro']({ group: group.value, type: type.value }))
    return {
      group,
      type,
      filteredPro
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
