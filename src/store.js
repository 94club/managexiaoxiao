import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  mutations: {
    updateUserInfo (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    updateUserInfo ({ commit }, data) {
      commit('updateUserInfo', data)
    }
  }
})
