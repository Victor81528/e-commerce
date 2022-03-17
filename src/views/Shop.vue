<template>
  <div class="shop">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Shop',
  setup () {
    const store = useStore()
    return {
      clothing: computed(() => store.getters['products/clothing'])
    }
  }
}
</script>
