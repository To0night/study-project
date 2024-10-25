let _vue = null

class Store {
  // 初始化getters对象
  getters = {}
  constructor({ state, mutations, actions, getters }) {
    const computed = {}

    Object.entries(getters).forEach(([getKey, getValue]) => {
      computed[getKey] = () => getValue(this.state)
      Object.defineProperty(this.getters, getKey, {
        get: () => {
          return this.state[getKey]
        },
      })
    })
    this.state = new _vue({
      data() {
        return state
      },
      computed
    })
    this.mutations = mutations
    this.actions = actions
    this.copyGets = getters
    // 初始化get方法
  }

  // mutation的commit方法
  commit = (mutationName, payload) => {
    this.mutations[mutationName](this.state, payload)
  }

  // actions的dispatch方法
  dispatch = (dispatchName, payload) => {
    this.actions[dispatchName](this, payload)
  }
}

const store = {
  install: (VueInstance) => {
    _vue = VueInstance
    VueInstance.mixin({
      beforeCreate() {
        if (this.$options.store) {
          // 说明是根组件
          VueInstance.prototype.$store = this.$options.store
        }
      },
    })
  },
  Store,
}

export default store
