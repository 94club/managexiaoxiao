import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: '',
    isCollapse: false
  },
  mutations: {
    updateUserInfo (state, data) {
      state.userInfo = data
    },
    updateIsCollapse (state, data) {
      state.isCollapse = data
    }
  },
  actions: {
    updateUserInfo ({ commit }, data) {
      commit('updateUserInfo', data)
    },
    updateIsCollapse ({ commit }, data) {
      commit('updateIsCollapse', data)
    }
  }
})
