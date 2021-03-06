const state = {
  data: []
}

const getters = {
  favInfo: (state, getters, rootState) => {
    const favArr = state.data
    const arr = rootState.products.list
    const newArr = []
    favArr.forEach((i) => {
      arr.forEach((j) => {
        if (i.id === j.id) newArr.push(j)
      })
    })
    return newArr
  }
}

const mutations = {
  getData: (state) => {
    state.data = localStorage.getItem('favorite')
    state.data = JSON.parse(state.data) || []
  },
  add: (state, id) => {
    let favorite = localStorage.getItem('favorite')
    const good = {
      id: id
    }
    // 判斷是否為空、重複id
    if (favorite === null || favorite === []) favorite = [good]
    else {
      let isNew = true
      favorite = JSON.parse(favorite)
      favorite.forEach(i => {
        if (i.id === good.id) {
          isNew = false
        }
      })

      if (isNew) favorite.push(good)
    }
    // 將新favorite覆蓋舊的
    localStorage.setItem('favorite', JSON.stringify(favorite))
  },
  remove: (state, id) => {
    let favorite = localStorage.getItem('favorite')
    favorite = JSON.parse(favorite)
    favorite = favorite.filter(i => {
      return i.id !== id
    })
    localStorage.setItem('favorite', JSON.stringify(favorite))
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
