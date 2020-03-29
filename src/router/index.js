import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Markdown from '../views/Markdown.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'markdown',
    component: Markdown
  },
  {
    path: '/',
    name: 'Markdown',
    component: Home
  },
  {
    path: '/about',
    name: 'todo-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
