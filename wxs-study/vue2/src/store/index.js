import Vue from 'vue'
import Vuex from 'vuex'

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
    name(state){
      return state.name + 1
    }
  }
})


export default store