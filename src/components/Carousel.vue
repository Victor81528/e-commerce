<template>
  <div id="carousel" class="carousel slide user-select-none" data-bs-ride="carousel" data-bs-interval="false" pause>
    <div class="carousel-inner">
      <div class="carousel-item position-relative" :class="{ active: index === 0 }" v-for="(item, index) of data" :key="index">
        <img :src="item.img" class="d-block w-100">
        <div class="carousel-caption d-none d-md-block">
          <h5 v-html="item.title"></h5>
          <p v-html="item.desc"></p>
          <a href="/" v-html="item.linkTitle"></a>
        </div>
      </div>
    </div>
    <!-- <div class="carousel-indicators">
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
    </div> -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  setup () {
    const data = [
      {
        title: 'Valentine’s day',
        img: '/img/banner/01.jpeg',
        desc: '',
        linkTitle: 'Discover the new collection',
        link: ''
      },
      {
        title: 'Bolas <span style="color: black">x</span> Kjølig',
        img: '/img/banner/02.jpeg',
        desc: '',
        linkTitle: 'Discover the new collection',
        link: ''
      },
      {
        title: '2022 SPRING',
        img: '/img/banner/03.jpeg',
        desc: '',
        linkTitle: 'Discover the new collection',
        link: ''
      },
      {
        title: '<span style="color: black">Ocalou Design<span>',
        img: '/img/banner/04.jpeg',
        desc: '',
        linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
        link: ''
      },
      {
        title: '<span">Accessories<span>',
        img: '/img/banner/05.jpeg',
        desc: '',
        linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
        link: ''
      }
    ]
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
#carousel {
  h5 {
    position: relative;
    font-size: 90px;
    bottom: 20vh;
  }
  a {
    text-decoration: none;
  }
}
</style>
