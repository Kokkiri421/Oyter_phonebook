import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '../views/ContactList.vue'

const routes = [
  {
    path: '/',
    name: 'Contact List',
    component: ContactList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
