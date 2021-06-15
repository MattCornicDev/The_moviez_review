import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Accueil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path: '/maListe',
    name: 'MaListe',
    // route level code-splitting
    // this generates a separate chunk (maListe.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "maListe" */ '../views/MaListe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
