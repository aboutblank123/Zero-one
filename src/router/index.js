import { createRouter, createWebHistory } from 'vue-router'
import HeaderView from '../layout/HeaderView.vue'


const routes = [
  {
    path: '/',
    name: 'Header',
    component: HeaderView
  }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
