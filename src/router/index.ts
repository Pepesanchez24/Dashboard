import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomePage from '../views/HomePage.vue'
import BusinessDashboard from '../views/BusinessDashboard.vue'
import TechnicalDashboard from '../views/TechnicalDashboard.vue'
import AnalyticsPage from '../views/AnalyticsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/business',
    name: 'Business',
    component: BusinessDashboard
  },
  {
    path: '/technical',
    name: 'Technical',
    component: TechnicalDashboard
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: AnalyticsPage
  }
]

const router = createRouter({
  history: createWebHistory(''),
  routes
})

export default router