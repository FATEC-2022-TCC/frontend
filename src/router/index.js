import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Login.vue'
import Push from '../Push.vue'
import Card from '../Card.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/push',
      name: 'push',
      component: Push
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    }
  ]
})

export default router
