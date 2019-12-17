import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ddea6d58 = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _7b9b0c34 = () => interopDefault(import('../pages/support.vue' /* webpackChunkName: "pages/support" */))
const _6fc47048 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _65c16af7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/product",
    component: _ddea6d58,
    name: "product"
  }, {
    path: "/support",
    component: _7b9b0c34,
    name: "support"
  }, {
    path: "/team",
    component: _6fc47048,
    name: "team"
  }, {
    path: "/",
    component: _65c16af7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
