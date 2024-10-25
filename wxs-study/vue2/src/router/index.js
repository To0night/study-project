import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/AboutView.vue')
  },
  {
    path: '/comp',
    name: 'comp',
    component: () => import(/* webpackChunkName: "about" */ '../pages/compTest.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.base,
  routes
})

export default router
