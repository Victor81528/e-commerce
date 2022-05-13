<template>
<div class="navbar w-100 fixed-top py-0">
  <!-- nav1 -->
  <div class="d-none d-md-block w-100 bg-dark user-select-none">
    <div class="container-md">
      <div class="row">
        <nav class="d-flex py-0" style="font-family: 'Jost';font-weight: 600;">
          <router-link :to="{ name: 'Shop', params: { group: 'all', type: type || 'all' }}" class="nav1 nav-link text-secondary ps-0 py-1 me-1">
            ALL
          </router-link>
          <router-link :to="{ name: 'Shop', params: { group: 'women', type: type || 'all' }}" class="nav1 nav-link text-secondary py-1 mx-1">
            WOMEN
          </router-link>
          <router-link :to="{ name: 'Shop', params: { group: 'men', type: type || 'all' }}" class="nav1 nav-link text-secondary py-1 mx-1">
            MEN
          </router-link>
        </nav>
      </div>
    </div>
  </div>
  <!-- nav2 -->
  <div class="w-100 bg-primary user-select-none">
    <div class="container-md">
      <div class="row">
        <nav class="d-flex flex-row position-relative w-100 justify-content-between">
          <h1 class="navbar-brand d-flex position-absolute top-50 start-50 my-auto"
            style="transform: translate(-50%,-50%);vertical-align: middle">
            <a :href="home" class="align-center text-dark text-decoration-none"
              style="vertical-align: middle;font-family: 'Krona one';font-size: 21px; font-weight: 600">Kjølig</a>
          </h1>
          <ul class="nav py-3">
            <li class="nav-link d-block d-md-none px-0">
              <i class="fa-solid fa-bars text-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu"></i>
            </li>
            <li class="nav-link d-none d-md-block ps-0 pe-2 me-1">
              <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'all' }}" class="nav2 position-relative text-secondary">
                All
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link d-none d-md-block px-2 mx-1">
              <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'clothing' }}" class="nav2 position-relative text-secondary">
                Clothing
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link d-none d-md-block px-2 mx-1">
              <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'shoes' }}" class="nav2 position-relative text-secondary">
                Shoes
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
            <li class="nav-link d-none d-md-block px-2 mx-1">
              <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'bag' }}" class="nav2 position-relative text-secondary">
                Bag
                <div class="point position-absolute rounded bg-danger"></div>
              </router-link>
            </li>
          </ul>
          <ul class="nav align-items-center">
            <li class="nav3 nav-link px-3 text-dark" data-bs-toggle="offcanvas" data-bs-target="#fav"><i class="fa-solid fa-heart"></i></li>
            <li class="nav3 nav-link px-2 pe-1 pe-sm-0 text-dark" data-bs-toggle="offcanvas" data-bs-target="#cart"><i class="fas fa-bag-shopping"></i></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <!-- 折疊menu -->
  <div class="offcanvas offcanvas-top d-md-none" tabindex="-1" id="offcanvasMenu">
    <div class="offcanvas-header justify-content-center">
      <h5 class="offcanvas-title " id="offcanvasMenuLabel">Menu</h5>
    </div>
    <div class="offcanvas-body flex-grow-0">
      <ul class="py-3 px-0">
        <li class="nav-link px-2 mx-1 py-0 my-1" data-bs-dismiss="offcanvas">
          <router-link :to="{ name: 'Shop', params: { group: 'all', type: type || 'all' }}"
            class="nav2 d-block text-secondary py-2">
            All
          </router-link>
        </li>
        <li class="nav-link px-2 mx-1 py-0 my-1" data-bs-dismiss="offcanvas">
          <router-link :to="{ name: 'Shop', params: { group: 'women', type: type || 'all' }}"
            class="nav2 d-block text-secondary py-2">
            Women
          </router-link>
        </li>
        <li class="nav-link px-2 mx-1 py-0 my-1" data-bs-dismiss="offcanvas">
          <router-link :to="{ name: 'Shop', params: { group: 'men', type: type || 'all' }}"
            class="nav2 d-block text-secondary py-2">
            Men
          </router-link>
        </li>
      </ul>
      <hr>
      <ul class="py-3 px-0">
        <li class="nav-link px-2 mx-1 py-0 my-1" data-bs-dismiss="offcanvas">
          <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'all' }}"
            class="nav2 d-block text-secondary py-2">
            All
          </router-link>
        </li>
        <li class="nav-link px-2 mx-1 py-0 my-1" data-bs-dismiss="offcanvas">
          <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'clothing' }}"
            class="nav2 d-block text-secondary py-2">
            Clothing
          </router-link>
        </li>
        <li class="nav-link px-2 mx-1 py-0 my-1" data-bs-dismiss="offcanvas">
          <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'shoes' }}"
            class="nav2 d-block text-secondary py-2">
            Shoes
          </router-link>
        </li>
        <li class="nav-link px-2 mx-1 py-0 my-1" data-bs-dismiss="offcanvas">
          <router-link :to="{ name: 'Shop', params: { group: group || 'all', type: 'bag' }}"
            class="nav2 d-block text-secondary py-2">
            Bag
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'NavBar',
  setup () {
    const route = useRoute()

    // route
    const group = computed(() => route.params.group)
    const type = computed(() => route.params.type)

    const home = process.env.VUE_APP_PATH

    return {
      group,
      type,
      home
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav1 {
  font-size: 9px;
  transition: 0.3s;
  &:hover, &.router-link-active{
    color: white !important;
    cursor: pointer;
  }
}
.nav2 {
  font-size: 14px;
  font-family: 'Jost';
  font-weight: 400;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: black !important;
    cursor: pointer;
  }
  .point {
    content: '';
    height: 4px;
    width: 4px;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 3px);
  }
  &.router-link-active {
    color: black !important;
    .point {
      opacity: 1;
      transition: 0.3s;
    }
  }
}
.nav3 {
  transition: 0.3s;
  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
}
#offcanvasMenu {
  height: 540px;
}
</style>
