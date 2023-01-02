import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    redirect: '/Dashboard',
    children:[
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('../components/main/Dashboard.vue')
      },
      {
        path: '/Operation',
        name: 'Operation',
        component: () => import('../components/main/Operation.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
