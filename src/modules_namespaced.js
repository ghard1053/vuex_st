import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    double: state => state.count + state.count
  },
  mutations: {
    update (state, payload) {
      state.count = payload
    }
  },
  modules: {
    example: {
      namespaced: true,

      getters: {
        triple: (state, getters, rootState, rootGetters) => {
          return rootState.count + rootGetters.double
        }
      },
      actions: {
        multiplyByFive (ctx) {
          const payload = ctx.rootGetters.double + ctx.getters.triple
          ctx.commit('update', payload, { root: true })
        }
      }
    },
    sample: {
      namespaced: true,

      state: {
        value: 'Example'
      },
      getters: {
        upper: state => {
          return state.value.toUpperCase()
        }
      },
      mutations: {
        update (state) {
          state.value = 'Updated'
        }
      },
      actions: {
        update (ctx) {
          ctx.commit('update')
        }
      }
    }
  }
})