import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../components/homePage.vue'

const routes = [
  { path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue') 
  },
  { path: '/accounts',
    name: 'Accounts',
    component: () => import('../views/Accounts.vue') 
  },
  { path: '/',
    name: 'HomePage',
    component: () => import('../components/homePage.vue') 
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router