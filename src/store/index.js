import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {}
const getters = {}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  modules: {
    show: false
  }
})
