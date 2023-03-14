import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import HelloWorld from '../components/HelloWorld.vue'


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: MainLayout
  },
  {
    path: '/',
    name : 'main',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
