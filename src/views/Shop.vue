<template>
  <div class="shop w-100 user-select-none">
    <div class="container-md mb-5">
      <div class="row mt-4 gx-2 gx-md-4">
        <div v-if="filteredPro.length === 0">
          目前沒有商品喔~
        </div>
        <div class="col-6 col-sm-4 col-lg-3 col-xl-2 position-relative mb-5" v-for="item of filteredPro" :key="item.id">
          <Product-card :item="item"/>
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
.shop {
  flex-grow: 1;
  margin-top: 98px;
  @media screen and (max-width: 768px) {
    margin-top: 72px;
  }
}
</style>
