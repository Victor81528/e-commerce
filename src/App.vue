<template>
  <NavBar/>
  <transition>
    <router-view/>
  </transition>
  <Footer/>
  <Modal/>
</template>

<script>
import NavBar from '@/layout/NavBar'
import Footer from '@/layout/Footer'
import Modal from '@/layout/Modal'
export default {
  components: {
    NavBar,
    Footer,
    Modal
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

html, body {
  height: 100%;
  margin: 0;
}
#app {
  display: flex; /*使物件依序排列*/
  flex-direction: column; /*使物件垂直排列*/
  height: 100%;
}
</style>
