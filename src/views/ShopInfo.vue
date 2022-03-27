<template>
  <div class="shop">
    <h1>shopinfo no. {{id}}</h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'Shop_info',
  setup () {
    const route = useRoute()
    const id = computed(() => route.params.id)
    return {
      id
    }
  }
}
</script>
