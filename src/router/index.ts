import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Tutorials from '../views/Tutorials.vue'
import Contact from '../views/Contact.vue'
import FeedBack from '../views/FeedBack.vue'
import Portafolio from '../views/Portafolio.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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
    path: '/portafolio',
    name: 'Portafolio',
    component: Portafolio
  },
  {
    path: '/tutorials',
    name: 'Tutoriales',
    component: Tutorials
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/feedback',
    name: 'FeedBack',
    component: FeedBack
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
