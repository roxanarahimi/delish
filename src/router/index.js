import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "foods" */ '../views/LoginRegister.vue')
  },
  {
    path: '/foods',
    name: 'foods',
    component: () => import(/* webpackChunkName: "foods" */ '../views/Foods.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
{
    path: '/confirm',
    name: 'confirm',
    component: () => import(/* webpackChunkName: "confirm" */ '../views/ConfirmOrder.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
