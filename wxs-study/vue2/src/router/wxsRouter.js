import Vue from "vue"
import Router from "../myPlugins/wxsRouter"
import HomeView from "../pages/home.vue"
import childVue from "../pages/child.vue"
import grandSon from "../pages/grandSon.vue"
import aboutComp from "../pages/AboutView"

Vue.use(Router)

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "child1",
        name: "child1",
        component: childVue,
        children: [
          {
            path: "grandSon",
            name: "grandSon",
            component: grandSon,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: aboutComp,
  },
]

const router = new Router({
  mode: "history",
  base: "/wxs自定义",
  routes,
})

export default router
