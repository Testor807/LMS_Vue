// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Vert from '../components/index/GridList.vue';
import item from '../components/Item/ItemInfo.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/item', component: item}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;