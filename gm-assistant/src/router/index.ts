import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      { path: '', name: 'witcherTracker', component: () => import('@/views/Dashboard/WitcherTracker.vue') },
      { path: 'laboratory', name: 'laboratory', component: () => import('@/views/Dashboard/WitcherLaboratory.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
