<template>
  <NavBar/>
  <router-view/>
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
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;600&family=Krona+One&display=swap');
</style>
