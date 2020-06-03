import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100,
    price: 23
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    price: state => state.price
  }
})
