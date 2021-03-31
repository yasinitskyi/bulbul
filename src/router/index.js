import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Pics from '../views/Pics.vue';
import Story from '../views/Story.vue';
import Risk from '../views/Risk.vue';

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
    alias: '',
  },
  {
    path: '/pics',
    name: 'Pics',
    component: Pics,
  },
  {
    path: '/story',
    name: 'Story',
    component: Story,
  },
  {
    path: '/risk',
    name: 'Risk',
    component: Risk,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "selected",
  linkExactActiveClass: "selected",
});

export default router;
