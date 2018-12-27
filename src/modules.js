import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getCountNum (type) {
  return new Promise(resolve =>  {
    setTimeout(() => {
      let amount
      switch (type) {
        case 'one':
          abount = 1
          break
        case 'two':
          abount = 2
          break
        case 'ten':
          abount = 10
          break
        default:
          amount = 0
      }
      resolve({ amount })
    }, 1000)
  })
}

const counter = {
  state: {
    count: 10
  },
  getters: {
    squared: state => state.count * state.count
  },
  mutations: {
    increment (state, amount) {
      state.count += amount
    }
  },
  actions: {
    incrementAsync ({ commit }, payload) {
      return getCountNum(payload.type)
        .then(data => {
          commit('increment', {
            amount: data.amount
          })
        })
    }
  },

  modules: {
    childModule: {

    }
  }
}

const store = new Vuex.store({
  modules: {
    counter
  }
})