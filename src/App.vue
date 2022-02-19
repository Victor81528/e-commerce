<template>
  <h1>qeqeqeqeq</h1>
  <button class="btn btn-primary">dadadda</button>
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
</style>
