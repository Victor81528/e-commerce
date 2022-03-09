<template>
  <div class="footer">
    <div class="bg-dark" style="opacity: 0.9">
      <div class="container-xxl px-0 py-4">
        <ul class="nav d-flex h-100 justify-content-center align-center fs-2">
          <li class="nav-link text-white"><i class="fa-brands fa-twitter my-auto"></i></li>
          <li class="nav-link text-white"><i class="fa-brands fa-instagram"></i></li>
          <li class="nav-link text-white"><i class="fa-brands fa-facebook-f"></i></li>
          <li class="nav-link text-white"><i class="fa-brands fa-pinterest"></i></li>
        </ul>
      </div>
    </div>
    <div class="bg-dark">
      <div class="container-xxl px-0">
        <p class="text-center text-white py-1 m-0">Copyright© {{timeYear}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup () {
    const timeYear = new Date().getFullYear()
    return {
      timeYear
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li {
  cursor: pointer;
}
</style>
