import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'
import OrderView from '../views/pages/OrderView.vue'
import LoginView from '../views/pages/LoginView.vue'
import Other from '../utils/Other';

const envGuard = (to, from, next) => {
  let appEnv = import.meta.env.VITE_APP_ENV;
  if (Other.envTransform(appEnv) != "local") {
    let token = localStorage.getItem("token");
    if (!token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: envGuard
    },
    {
      path: "/order",
      name: "order",
      component: OrderView,
      beforeEnter: envGuard
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    }
  ]
})

export default router
