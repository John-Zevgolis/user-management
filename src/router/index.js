import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'

const routes = [
  {
    path: '/',
    alias: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/AddUser.vue')
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import('../views/UserDetails.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/EditUser.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
