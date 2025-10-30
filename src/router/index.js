import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/typography',
    name: 'Typography',
    component: () => import('../views/TypographyPage.vue')
  },
  {
    path: '/colors',
    name: 'Colors',
    component: () => import('../views/ColorsPage.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('../views/GridPage.vue')
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import('../views/ButtonsPage.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import('../views/FormsPage.vue')
  },
  {
    path: '/modals',
    name: 'Modals',
    component: () => import('../views/ModalsPage.vue')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/ComponentsDemoPage.vue')
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('../views/IconsPage.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/CardsPage.vue')
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: () => import('../views/NavigationPage.vue')
  },
  {
    path: '/pinpad',
    name: 'PinPad',
    component: () => import('../views/PinPadPage.vue')
  },
  {
    path: '/backoffice',
    name: 'BackOffice',
    component: () => import('../views/BackOfficePage.vue')
  },
  {
    path: '/banking-landing',
    name: 'BankingLanding',
    component: () => import('../views/BankingLandingPage.vue')
  },
  {
    path: '/scroll-demo',
    name: 'ScrollDemo',
    component: () => import('../views/ScrollAnimationDemo.vue')
  },
  {
    path: '/advanced-scroll',
    name: 'AdvancedScroll',
    component: () => import('../views/AdvancedScrollDemo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
