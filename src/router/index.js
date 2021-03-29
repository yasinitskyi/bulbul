import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
    alias: '',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "selected",
  linkExactActiveClass: "selected",
});

export default router;
