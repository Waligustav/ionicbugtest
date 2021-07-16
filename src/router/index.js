import { createRouter, createWebHistory } from '@ionic/vue-router';

import firstPage from '../pages/firstPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/firstPage'
  },
  {
    path: '/firstPage',
    component: firstPage
  },
  {
    path: '/firstPage/:id',
    component: () => import ('../pages/secondPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
