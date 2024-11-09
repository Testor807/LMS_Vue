// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Home2 from '../components/Home.vue';
import About2 from '../components/About.vue';
import Vert from '../components/index/GridList.vue';
import item from '../components/Item/ItemInfo.vue';
import Component1 from '@/components/Component1.vue';
import Component2 from '@/components/Component2.vue';
const routes = [
  //{ path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/', component: Component1 },
  { path: '/about2', component: Component2 },
  { path: '/item', name:'item',component: item},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;