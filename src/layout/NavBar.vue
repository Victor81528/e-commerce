<template>
<div class="navbar py-0">
  <!-- nav1 -->
  <div class="w-100 bg-dark">
    <div class="container-xxl px-0">
      <div class="row">
        <nav class="nav py-0" style="font-family: 'Jost';font-weight: 600;">
          <a class="nav1 nav-link text-secondary mx-1 py-1">WOMEN</a>
          <a class="nav1 nav-link text-secondary mx-1 py-1">MEN</a>
          <a class="nav1 nav-link text-secondary mx-1 py-1">KIDS</a>
        </nav>
      </div>
    </div>
  </div>
  <!-- nav2 -->
  <div class="w-100 bg-primary">
    <div class="container-xxl px-0">
      <div class="row">
        <nav class="d-flex flex-row position-relative w-100 justify-content-between">
          <h1 class="position-absolute top-50 start-50 text-dark"
            style="font-family: 'Krona one';font-size: 21px;transform: translate(-50%,-50%)">Kjølig</h1>
          <ul class="nav py-3">
            <li class="nav2 nav-link px-2 mr-1 text-secondary">Main</li>
            <li class="nav2 nav-link px-2 mx-1 text-secondary">New in</li>
            <li class="nav2 nav-link px-2 mx-1 text-secondary">Cloathing</li>
            <li class="nav2 nav-link px-2 mx-1 text-secondary">Shoes</li>
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
h1 {
  cursor: pointer;
}
.nav1 {
  font-size: 9px;
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
  &:hover {
    color: black !important;
    cursor: pointer;
  }
}
.nav3 {
  &:hover {
    cursor: pointer;
  }
}
</style>
