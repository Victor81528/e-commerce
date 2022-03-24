<template>
  <NavBar/>
  <transition>
    <router-view/>
  </transition>
  <Footer/>
</template>

<script>
import NavBar from '@/layout/NavBar'
import Footer from '@/layout/Footer'
export default {
  components: {
    NavBar,
    Footer
  },
  setup () {
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600&family=Krona+One&display=swap');
.v-enter-active, .v-leave-active {
  transition: opacity 0.8s;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
.v-enter-to, .v-leave-from {
  opacity: 1;
}
</style>
