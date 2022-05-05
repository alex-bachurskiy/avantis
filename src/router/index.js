import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueRouter)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 1500,
  easing: "ease-in-out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

import MainRu from '../views/main-ru.vue';
import MainEn from '../views/main-en.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainRu
  },
  {
    path: '/en',
    name: 'mainEn',
    component: MainEn
  }
]

const router = new VueRouter({
  routes
})

export default router
