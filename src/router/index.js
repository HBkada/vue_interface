import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/MainLayout.vue'
import WriteupManagement from '../views/WriteupManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          redirect: '/writeup-manage',
        },
        {
          path: '/writeup-manage',
          name: 'WriteupManagement',
          component: WriteupManagement,
        },
      ],
    },
  ],
})

export default router
