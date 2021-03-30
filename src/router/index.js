import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Pics from '../views/Pics.vue';

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
    alias: '',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pics',
    name: 'Pics',
    component: Pics,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "selected",
  linkExactActiveClass: "selected",
});

export default router;
