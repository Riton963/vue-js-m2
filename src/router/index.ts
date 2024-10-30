// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import WorkFlows from '../views/WorkFlows.vue';
import Status from '@/views/Status.vue';
import { authGuard } from '../services/authGuard';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/workflows',
    name: 'WorkFlows',
    component: WorkFlows,
  },
  {
    path: '/status',
    name: 'Status',
    component: Status,
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
