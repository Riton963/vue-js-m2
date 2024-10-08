// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import WorkFlows from '../views/WorkFlows.vue';
import Status from '@/views/Status.vue';
import { authGuard } from '../services/authGuard';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    beforeEnter: authGuard,
    component: Home,
  },
  {
    path: '/workflows',
    name: 'WorkFlows',
    beforeEnter: authGuard,
    component: WorkFlows,
  },
  {
    path: '/status',
    name: 'Status',
    beforeEnter: authGuard,
    component: Status,
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
