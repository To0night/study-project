import Vue from "vue"
import App from "./App.vue"
// import router from  './router/wxsRouter'
// import store from './store/wxsStore'
import store from './store'
import router from "./router"

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app")
