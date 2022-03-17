<template>
<div class="navbar py-0 user-select-none">
  <!-- nav1 -->
  <div class="w-100 bg-dark">
    <div class="container">
      <div class="row">
        <nav class="nav py-0" style="font-family: 'Jost';font-weight: 600;">
          <a class="nav1 nav-link text-secondary mx-1 py-1" data-toggle="tab">WOMEN</a>
          <a class="nav1 nav-link text-secondary mx-1 py-1" data-toggle="tab">MEN</a>
          <a class="nav1 nav-link text-secondary mx-1 py-1" data-toggle="tab">KIDS</a>
        </nav>
      </div>
    </div>
  </div>
  <!-- nav2 -->
  <div class="w-100 bg-primary">
    <div class="container">
      <div class="row">
        <nav class="d-flex flex-row position-relative w-100 justify-content-between">
          <h1 class="navbar-brand d-flex position-absolute top-50 start-50 my-auto"
            style="transform: translate(-50%,-50%);vertical-align: middle">
            <a href="/" class="align-center text-dark text-decoration-none"
              style="vertical-align: middle;font-family: 'Krona one';font-size: 21px; font-weight: 600">Kjølig</a>
          </h1>
          <ul class="nav py-3">
            <li class="nav2 nav-link px-2 mr-1 text-secondary">Main</li>
            <li class="nav2 nav-link px-2 mx-1 text-secondary">Cloathing</li>
            <li class="nav2 nav-link px-2 mx-1 text-secondary">Shoes</li>
            <li class="nav2 nav-link px-2 mx-1 text-secondary">Bag</li>
          </ul>
          <ul class="nav align-items-center">
            <li class="nav3 nav-link text-dark"><i class="fas fa-magnifying-glass"></i></li>
            <li class="nav3 nav-link text-dark"><i class="fas fa-heart"></i></li>
            <li class="nav3 nav-link text-dark"><i class="fas fa-bag-shopping"></i></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav1 {
  font-size: 9px;
  transition: 0.3s;
  &:hover {
    color: white !important;
    cursor: pointer;
  }
  .active {
    color: red !important;
  }
}
.nav2 {
  font-size: 14px;
  transition: 0.3s;
  &:hover {
    color: black !important;
    cursor: pointer;
  }
}
.nav3 {
  transition: 0.3s;
  &:hover {
    opacity: 30%;
    cursor: pointer;
  }
}
</style>
