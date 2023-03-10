import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Loginview.vue')
    },
    {
      path: '/admin',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/admin/Adminorders.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/admin/AdminCoupon.vue')
        },
        {
          path: 'article',
          component: () => import('../views/admin/AdminArticle.vue')
        },
      ]
    }
    
  ]
})

export default router
