import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _534a6886 = () => interopDefault(import('../pages/agendar.vue' /* webpackChunkName: "pages/agendar" */))
const _7a989a89 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _e255754e = () => interopDefault(import('../pages/sobre.vue' /* webpackChunkName: "pages/sobre" */))
const _9c4ac398 = () => interopDefault(import('../pages/admin/calendario.vue' /* webpackChunkName: "pages/admin/calendario" */))
const _6c911903 = () => interopDefault(import('../pages/admin/equipamentos.vue' /* webpackChunkName: "pages/admin/equipamentos" */))
const _5045f3de = () => interopDefault(import('../pages/admin/eventos.vue' /* webpackChunkName: "pages/admin/eventos" */))
const _5ead3f1c = () => interopDefault(import('../pages/admin/perfil.vue' /* webpackChunkName: "pages/admin/perfil" */))
const _9e1e111c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/agendar",
    component: _534a6886,
    name: "agendar"
  }, {
    path: "/login",
    component: _7a989a89,
    name: "login"
  }, {
    path: "/sobre",
    component: _e255754e,
    name: "sobre"
  }, {
    path: "/admin/calendario",
    component: _9c4ac398,
    name: "admin-calendario"
  }, {
    path: "/admin/equipamentos",
    component: _6c911903,
    name: "admin-equipamentos"
  }, {
    path: "/admin/eventos",
    component: _5045f3de,
    name: "admin-eventos"
  }, {
    path: "/admin/perfil",
    component: _5ead3f1c,
    name: "admin-perfil"
  }, {
    path: "/",
    component: _9e1e111c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
