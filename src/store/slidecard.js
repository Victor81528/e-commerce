const state = {
  handPickedDaily: [
    {
      id: 1,
      title: 'Must Have',
      img: process.env.VUE_APP_PATH + '/img/product/01.jpeg',
      desc: 'List from stylist Hannah Berns',
      linkTitle: 'Discover the new collection',
      link: ''
    },
    {
      id: 2,
      title: 'New Arrival',
      img: process.env.VUE_APP_PATH + '/img/product/02.jpeg',
      desc: 'List from stylist Jogn Greenwood',
      linkTitle: 'Discover the new collection',
      link: ''
    },
    {
      id: 3,
      title: 'The Look',
      img: process.env.VUE_APP_PATH + '/img/product/03.jpeg',
      desc: 'List from stylist Ben Gordon',
      linkTitle: 'Discover the new collection',
      link: ''
    },
    {
      id: 4,
      title: 'Insta Shock',
      img: process.env.VUE_APP_PATH + '/img/product/04.jpeg',
      desc: 'List from stylist Norman Cage',
      linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
      link: ''
    },
    {
      id: 5,
      title: 'Just Chill',
      img: process.env.VUE_APP_PATH + '/img/product/05.jpeg',
      desc: 'List from stylist Tom Ray',
      linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
      link: ''
    },
    {
      id: 6,
      title: 'Hot Selling',
      img: process.env.VUE_APP_PATH + '/img/product/06.jpeg',
      desc: 'List from stylist Tom Ray',
      linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
      link: ''
    },
    {
      id: 7,
      title: 'Just Chill',
      img: process.env.VUE_APP_PATH + '/img/product/07.jpeg',
      desc: 'List from stylist Tom Ray',
      linkTitle: '<span style="color: black; font-weight: 600">Discover the new collection</span>',
      link: ''
    }
  ],
  trendingNow: [
    {
      id: 8,
      title: 'Maculay 03',
      img: process.env.VUE_APP_PATH + '/img/product/08.jpeg',
      desc: 'New colors arrival',
      link: ''
    },
    {
      id: 9,
      title: 'Vender outlander',
      img: process.env.VUE_APP_PATH + '/img/product/09.jpeg',
      desc: 'Classic Landing Shoes',
      link: ''
    },
    {
      id: 10,
      title: 'One Pinker',
      img: process.env.VUE_APP_PATH + '/img/product/10.jpeg',
      desc: 'Young! Sexy!',
      link: ''
    },
    {
      id: 11,
      title: 'Vintage 1970s',
      img: process.env.VUE_APP_PATH + '/img/product/11.jpeg',
      desc: 'Retro fashion',
      link: ''
    },
    {
      id: 12,
      title: 'W601 S22',
      img: process.env.VUE_APP_PATH + '/img/product/12.jpeg',
      desc: 'Dating outfit',
      link: ''
    },
    {
      id: 13,
      title: 'Solaire of Astora',
      img: process.env.VUE_APP_PATH + '/img/product/13.jpeg',
      desc: 'Praise the sun!',
      link: ''
    },
    {
      id: 14,
      title: 'W202',
      img: process.env.VUE_APP_PATH + '/img/product/14.jpeg',
      desc: 'Be with you when working',
      link: ''
    },
    {
      id: 15,
      title: 'wandering 03',
      img: process.env.VUE_APP_PATH + '/img/product/15.jpeg',
      desc: 'Hmmmmm...',
      link: ''
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
