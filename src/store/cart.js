const state = {
  data: []
}

const getters = {
  cartInfo: (state, getters, rootState) => {
    const cartArr = state.data
    const arr = rootState.products.list
    const newArr = []
    cartArr.forEach((i) => {
      arr.forEach((i2) => {
        if (i.id === i2.id) {
          i2 = {
            ...i2,
            qty: i.qty
          }
          newArr.push(i2)
        }
      })
    })
    return newArr
  }
}

const mutations = {
  getData: (state) => {
    state.data = localStorage.getItem('cart')
    state.data = JSON.parse(state.data) || []
  },
  add: (state, { id, count }) => {
    let cart = localStorage.getItem('cart')
    const good = {
      id: id,
      qty: count
    }
    // 判斷是否為空、重複id
    if (cart === null) cart = [good]
    else {
      let isNew = true
      cart = JSON.parse(cart)

      cart.forEach(i => {
        if (i.id === good.id) {
          i.qty = good.qty
          isNew = false
        }
      })

      if (isNew) cart.push(good)
    }
    // 將新favorite覆蓋舊的
    localStorage.setItem('cart', JSON.stringify(cart))
  },
  remove: (state, id) => {
    let cart = localStorage.getItem('cart')
    cart = JSON.parse(cart)
    cart = cart.filter(i => {
      return i.id !== id
    })
    localStorage.setItem('cart', JSON.stringify(cart))
  }
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
