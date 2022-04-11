<template>
  <div class="shop user-select-none">
    <div class="container">
      <div class="row mt-4">
        <div v-if="products.length === 0">
          目前沒有商品喔~
        </div>
        group: {{group}}
        type: {{type}}
        <!-- <div v-for="(i, index) of products" :key="index">
          {{i.fav}}
        </div> -->
        <div class="col-6 col-md-4 col-lg-3 col-xl-2 position-relative mb-5" v-for="item of products" :key="item.id">
          <productCard :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import productCard from '@/components/productCard'

export default {
  name: 'Shop',
  components: {
    productCard
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const group = computed(() => route.params.group)
    const type = computed(() => route.params.type)
    const products = computed(() => store.getters[`products/${type.value}`])

    return {
      group,
      type,
      products
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
