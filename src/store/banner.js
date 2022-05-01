const state = {
  data: [
    {
      title: 'Valentine’s day',
      img: process.env.VUE_APP_PATH + '/img/banner/01.jpeg',
      linkTitle: 'Discover the new collection',
      link: '/men/clothing'
    },
    {
      title: 'Bolas <span style="color: black">x</span> Kjølig',
      img: process.env.VUE_APP_PATH + '/img/banner/02.jpeg',
      linkTitle: 'Discover the new collection',
      link: '/women/clothing'
    },
    {
      title: '2022 SPRING',
      img: process.env.VUE_APP_PATH + '/img/banner/03.jpeg',
      linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
      link: '/women/all'
    },
    {
      title: '<span style="color: black">Outdoor Series<span>',
      img: process.env.VUE_APP_PATH + '/img/banner/04.jpeg',
      linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
      link: '/all/bag'
    },
    {
      title: '<span">Accessories<span>',
      img: process.env.VUE_APP_PATH + '/img/banner/05.jpeg',
      linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
      link: '/all/shoes'
    },
    {
      title: '<span style="color: black">Ocalou Design<span>',
      img: process.env.VUE_APP_PATH + '/img/banner/06.jpeg',
      linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
      link: '/women/clothing'
    },
    {
      title: "<span>Man's Soul<span>",
      img: process.env.VUE_APP_PATH + '/img/banner/07.jpeg',
      linkTitle: '<span>Discover the new collection</span>',
      link: '/men/shoes'
    }
  ]
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
