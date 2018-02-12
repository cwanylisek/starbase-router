import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app from './app.vue'
import data from './components/data.vue'

const routes = [
  { path: '/data/:type', component: data}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
