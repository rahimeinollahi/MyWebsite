import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{transitionName:'ts-fade'}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aboutme',
    name: 'AboutMe',
    component: () => import(/* webpackChunkName: "aboutme" */ '../views/AboutMe.vue'),
    meta:{transitionName:'ts-aboutme'}
  },
  {
    path: '/myskill',
    name: 'MySkill',
    component: () => import(/* webpackChunkName: "aboutme" */ '../views/MySkill.vue'),
    meta:{transitionName:'ts-myskill'}
  },
  {
    path: '/exitpage',
    name: 'ExitPage',
    component: () => import(/* webpackChunkName: "exitpage" */ '../views/ExitPage.vue'),
    meta:{transitionName:'ts-exitpage'}
  },
  {
    path: '/basalam',
    name: 'basalam',
    component: () => import(/* webpackChunkName: "exitpage" */ '../views/BaSalam.vue'),
    meta:{transitionName:'ts-baslam'}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
