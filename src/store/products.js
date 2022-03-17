const state = {
  list: [
    {
      id: 0,
      title: 'Must Have',
      img: '/img/product/01.jpeg',
      desc: 'List from stylist Hannah Berns',
      price: 499,
      gender: 0,
      type: 0
    },
    {
      id: 1,
      title: 'New Arrival',
      img: '/img/product/02.jpeg',
      desc: 'List from stylist Jogn Greenwood',
      price: 5200,
      gender: 1,
      type: 0
    },
    {
      id: 2,
      title: 'The Look',
      img: '/img/product/03.jpeg',
      desc: 'List from stylist Ben Gordon',
      price: 1769,
      gender: 0,
      type: 0
    },
    {
      id: 3,
      title: 'Insta Shock',
      img: '/img/product/04.jpeg',
      desc: 'List from stylist Norman Cage',
      price: 320,
      gender: 2,
      type: 1
    },
    {
      id: 4,
      title: 'Just Chill',
      img: '/img/product/05.jpeg',
      desc: 'List from stylist Tom Ray',
      price: 599,
      gender: 1,
      type: 0
    },
    {
      id: 5,
      title: 'Hot Selling',
      img: '/img/product/06.jpeg',
      desc: 'List from stylist Tom Ray',
      price: 1850,
      gender: 0,
      type: 0
    },
    {
      id: 6,
      title: 'Just Chill',
      img: '/img/product/07.jpeg',
      desc: 'List from stylist Tom Ray',
      price: 7200,
      gender: 0,
      type: 0
    },
    {
      id: 7,
      title: 'Maculay 03',
      img: '/img/product/08.jpeg',
      desc: 'New colors arrival',
      price: 400,
      gender: 2,
      type: 1
    },
    {
      id: 8,
      title: 'Vender outlander',
      img: '/img/product/09.jpeg',
      desc: 'Classic Landing Shoes',
      price: 700,
      gender: 2,
      type: 1
    },
    {
      id: 9,
      title: 'One Pinker',
      img: '/img/product/10.jpeg',
      desc: 'Young! Sexy!',
      price: 1340,
      gender: 0,
      type: 0
    },
    {
      id: 10,
      title: 'Vintage 1970s',
      img: '/img/product/11.jpeg',
      desc: 'Retro fashion',
      price: 999,
      gender: 1,
      type: 2
    },
    {
      id: 11,
      title: 'W601 S22',
      img: '/img/product/12.jpeg',
      desc: 'Dating outfit',
      price: 690,
      gender: 0,
      type: 0
    },
    {
      id: 12,
      title: 'Solaire of Astora',
      img: '/img/product/13.jpeg',
      desc: 'Praise the sun!',
      price: 399,
      gender: 1,
      type: 0
    },
    {
      id: 13,
      title: 'W202',
      img: '/img/product/14.jpeg',
      desc: 'Be with you when working',
      price: 550,
      gender: 1,
      type: 0
    },
    {
      id: 14,
      title: 'wandering 03',
      img: '/img/product/15.jpeg',
      desc: 'Hmmmmm...',
      price: 6990,
      gender: 1,
      type: 0
    },
    {
      id: 15,
      title: 'J suit',
      img: '/img/product/16.jpeg',
      desc: 'For halloween, may be...',
      price: 10600,
      gender: 1,
      type: 0
    }
  ]
}

const getters = {
  clothing: () => {
    return state.list.filter(i => i.type === 0)
  }
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
