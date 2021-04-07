import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

// 需要存储在sessionStorage的state
const createPersisted = createPersistedstate({
  storage: window.sessionStorage,
  reducer (val) {
    return {
      userName: val.userName
    }
  }
})
// 需要存储在localStorage的state
const createPersistedLocal = createPersistedstate({
  storage: window.localStorage,
  reducer (val) {
    return {

    }
  }
})

export default new Vuex.Store({
  state: {
    userName: '', // 用户名
    isCollapse: false // 折叠侧边栏
  },
  getters: {

  },
  mutations: {
    getUserName (state, userName) {
      state.userName = userName
    },
    setCollapse (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersisted, createPersistedLocal]
})
