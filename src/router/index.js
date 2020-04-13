import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import tenRoles from '../views/tenRoles.vue'
import nineRoles from '../views/nineRoles.vue'
import eightRoles from '../views/eightRoles.vue'
import sevenRoles from '../views/sevenRoles.vue'
import sixRoles from '../views/sixRoles.vue'
import fiveRoles from '../views/fiveRoles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tenRoles',
    name: 'tenRoles',
    component: tenRoles
  },
  {
    path: '/nineRoles',
    name: 'nineRoles',
    component: nineRoles
  },
  {
    path: '/eightRoles',
    name: 'eightRoles',
    component: eightRoles
  },
  {
    path: '/sevenRoles',
    name: 'sevenRoles',
    component: sevenRoles
  },
  {
    path: '/sixRoles',
    name: 'sixRoles',
    component: sixRoles
  },
  {
    path: '/fiveRoles',
    name: 'fiveRoles',
    component: fiveRoles
  },
]

const router = new VueRouter({
  routes
})

export default router
