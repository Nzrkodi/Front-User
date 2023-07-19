import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'
import OrderView from '../views/pages/OrderView.vue'
import LoginView from '../views/pages/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/order",
      name: "order",
      component: OrderView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    }
  ]
})

export default router
