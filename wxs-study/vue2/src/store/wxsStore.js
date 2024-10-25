import Vue from "vue"
import Vuex from "../myPlugins/wxsVuex.js"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 1,
  },
  mutations: {
    increment(state) {
      state.name++
    },
  },
  actions: {
    increment(context) {
      context.commit("increment")
    },
  },
  getters:{
    doubleName(state){
      return state.name * 2
    }
  }
})

export default store
